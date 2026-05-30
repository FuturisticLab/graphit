

const { mongoose } = require('../db');
module.exports = mongoose.model('Classroom', new mongoose.Schema({
    _id: String, instructorId: String, name: String, description: String,
    joinCode: String, createdAt: String,
    active: { type: Boolean, default: true }
}, { _id: false }));