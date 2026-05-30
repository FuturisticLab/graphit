
const { mongoose } = require('../db');
module.exports = mongoose.model('TestSession', new mongoose.Schema({
    _id: String, userId: String, classroomId: String, status: String,
    challengeIds: Array, answers: Object,
    startedAt: String, expiresAt: String,
    completedAt: String, totalMinutes: Number
}, { _id: false }));