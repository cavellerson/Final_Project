const express = require('express')
const comments = express.Router();
const commentPosts = require('../models/seed.js')
const Comment = require("../models/comment.js")

comments.get('/', (req, res) => {
    Comment.find({}, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.json(data)
        }
    })
})

comments.post('/', (req, res) => {
    Comment.create(req.body, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data)
        }
    })
})

comments.get('/seed', (req, res) => {
    Comment.create(commentPosts, (error, comments) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`${comments} have been added`);
        }
    })
})

comments.delete('/:id', (req, res) => {
    Comment.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data)
        }
    })
})

comments.put('/upvote/:id', (req, res) => {
    Comment.findByIdAndUpdate(
        req.params.id,
        {
            $inc: {votes: 1}
        },
        {new: true},
        (err, data) => {
            if (err) {
                res.send(err)
            } else {
                Comment.find({}, (err, data) => {
                    res.json(data)
                })
            }
        }
    )
})

comments.put('/downvote/:id', (req, res) => {
    Comment.findByIdAndUpdate(
        req.params.id,
        {
            $inc: {votes: -1}
        },
        {new: true},
        (err, data) => {
            if (err) {
                res.send(err)
            } else {
                Comment.find({}, (err, data) => {
                    res.json(data)
                })
            }
        }
    )
})


module.exports = comments;
