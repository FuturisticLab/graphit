const { mongoose } = require('../db');
module.exports = mongoose.model('Progress', new mongoose.Schema({
    _id: String, userId: String, challengeId: String,
    bestScore: Number, attempts: Number, completed: Boolean, firstSeen: String
}, { _id: false }));