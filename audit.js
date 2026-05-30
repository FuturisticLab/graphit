// JavaScript source code
const db = require('./db');
const { v4: uuid } = require('uuid');

async function audit(req, action, resource, resourceId) {
    await db.audit_log.insert({
        _id: uuid(),
        userId: req.user?._id || 'guest',
        action,
        resource,
        resourceId: resourceId || null,
        ip: req.ip,
        timestamp: new Date().toISOString()
    });
}

module.exports = { audit };
