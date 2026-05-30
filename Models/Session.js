
const { mongoose } = require('../db');
module.exports = mongoose.model('Session', new mongoose.Schema({
    _id: String, token: String, userId: String, type: String,
    createdAt: String, expiresAt: String
}, { _id: false }));