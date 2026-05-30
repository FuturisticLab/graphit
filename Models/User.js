const { mongoose } = require('../db');
module.exports = mongoose.model('User', new mongoose.Schema({
    _id: String, email: String, passwordHash: String, displayName: String,
    role: { type: String, default: 'student' },
    createdAt: String, lastLogin: String,
    totalScore: { type: Number, default: 0 },
    streakDays: { type: Number, default: 0 }
}, { _id: false }));