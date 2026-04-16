const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema({
    question: String,
    options: [String],
    correctAnswer: String,
    explanation: String
});
const quizSchema = new mongoose.Schema({
    topicId: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic', required: true },
    questions: [questionSchema],
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Quiz', quizSchema);