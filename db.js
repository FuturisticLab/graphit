const Datastore = require('nedb-promises');
const path = require('path');
const { v4: uuid } = require('uuid');

const dataDir = path.join(__dirname, 'data');

const datastores = {
  User: Datastore.create({ filename: path.join(dataDir, 'users.db'), autoload: true }),
  Session: Datastore.create({ filename: path.join(dataDir, 'sessions.db'), autoload: true }),
  Classroom: Datastore.create({ filename: path.join(dataDir, 'classrooms.db'), autoload: true }),
  Membership: Datastore.create({ filename: path.join(dataDir, 'memberships.db'), autoload: true }),
  Attempt: Datastore.create({ filename: path.join(dataDir, 'attempts.db'), autoload: true }),
  Progress: Datastore.create({ filename: path.join(dataDir, 'progress.db'), autoload: true }),
  TestSession: Datastore.create({ filename: path.join(dataDir, 'test_sessions.db'), autoload: true }),
  AuditLog: Datastore.create({ filename: path.join(dataDir, 'audit_log.db'), autoload: true }),
};

function wrapCursor(cursor, ModelClass) {
  return {
    sort(sortObj) {
      return wrapCursor(cursor.sort(sortObj), ModelClass);
    },
    limit(limitVal) {
      return wrapCursor(cursor.limit(limitVal), ModelClass);
    },
    then(onFulfilled, onRejected) {
      return cursor.then(docs => {
        const wrappedDocs = Array.isArray(docs)
          ? docs.map(doc => new ModelClass(doc))
          : docs;
        return onFulfilled ? onFulfilled(wrappedDocs) : wrappedDocs;
      }, onRejected);
    }
  };
}

class Schema {
  constructor(definition, options) {
    this.definition = definition;
    this.options = options;
  }
}

const mockMongoose = {
  Schema,
  connect: async () => {
    console.log('  Mock MongoDB connected (using NeDB)');
    return true;
  },
  model(name, schema) {
    const datastore = datastores[name];

    class Model {
      constructor(data) {
        Object.assign(this, data);
        if (schema && schema.definition) {
          for (const key of Object.keys(schema.definition)) {
            if (this[key] === undefined && schema.definition[key] && schema.definition[key].default !== undefined) {
              const def = schema.definition[key].default;
              this[key] = typeof def === 'function' ? def() : def;
            }
          }
        }
      }

      async save() {
        if (!this._id) {
          this._id = uuid();
        }
        const doc = this.toObject();
        await datastore.update({ _id: this._id }, doc, { upsert: true });
        return this;
      }

      toObject() {
        const doc = {};
        for (const key of Object.keys(this)) {
          if (!key.startsWith('_') || key === '_id') {
            doc[key] = this[key];
          }
        }
        return doc;
      }

      static async findOne(query) {
        const doc = await datastore.findOne(query);
        return doc ? new Model(doc) : null;
      }

      static find(query) {
        return wrapCursor(datastore.find(query), Model);
      }

      static updateOne(query, update) {
        return datastore.update(query, update);
      }

      static updateMany(query, update) {
        return datastore.update(query, update, { multi: true });
      }

      static deleteOne(query) {
        return datastore.remove(query);
      }

      static deleteMany(query) {
        return datastore.remove(query, { multi: true });
      }
    }

    return Model;
  }
};

const db = {
  mongoose: mockMongoose,
  users: datastores.User,
  sessions: datastores.Session,
  classrooms: datastores.Classroom,
  memberships: datastores.Membership,
  attempts: datastores.Attempt,
  progress: datastores.Progress,
  test_sessions: datastores.TestSession,
  audit_log: datastores.AuditLog,
};

module.exports = db;