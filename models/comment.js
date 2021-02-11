const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    body: {type: String, required: true},
    votes: {type: Number, default: 0},
    date: {type: Date, default: () => {
        return Date.now()
    }}
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment;
