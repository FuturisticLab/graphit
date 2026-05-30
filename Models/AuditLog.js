// JavaScript source code

const { mongoose } = require('../db');
module.exports = mongoose.model('AuditLog', new mongoose.Schema({
    _id: String, userId: String, action: String, resource: String,
    resourceId: String, ip: String, timestamp: String
}, { _id: false }));