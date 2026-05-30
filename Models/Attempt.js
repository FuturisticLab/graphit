// JavaScript source code

const { mongoose } = require('../db');
module.exports = mongoose.model('Attempt', new mongoose.Schema({
    _id: String, userId: String, classroomId: String, challengeId: String,
    points: Array, score: Number, correct: Boolean,
    mode: String, testSessionId: String, timestamp: String
}, { _id: false }));