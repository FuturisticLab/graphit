const { mongoose } = require('../db');
module.exports = mongoose.model('Membership', new mongoose.Schema({
    _id: String, userId: String, classroomId: String,
    joinedAt: String, role: { type: String, default: 'student' }
}, { _id: false }));