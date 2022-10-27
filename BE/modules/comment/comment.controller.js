const CommentModel = require('./comment');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const createComment = async (req, res) => {
    try {

        const { name, type } = req.body;

        const newComment = await CommentModel.create({
            name,
            type
        });

        res.send({ success: 1, data: newComment });
    } catch (error) {
        res.send({ success: 0, data: null, message: error.message })
    }
}
const deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params;

        const deleteComment = await CommentModel
            .findByIdAndDelete(commentId);

        res.send({ success: 1 });
    } catch (err) {
        res.status(400).send({ success: 0, message: err.message });
    }
}

const updateComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        const dataUpdateComment = req.body;

        const updatedComment = await CommentModel
            .findByIdAndUpdate(commentId, dataUpdateComment, { new: true });

        res.send({ success: 1, data: updatedComment });
    } catch (err) {
        res.status(400).send({ success: 0, data: null, message: err.message });
    }
}

const getComments = async (req, res) => {
    try {
        const comments = await (await CommentModel
            .find({})
            // .skip(offset)
            // .limit(limit)
        );
        const totalComment = await CommentModel.countDocuments({});
        res.send(
            {
                success: 1,
                data: {
                    comments: comments,
                    total: totalComment
                }
            });
    } catch (err) {
        res.status(400).send({ success: 0, data: [], message: err.message });
    }
}

const getComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        const comment = await (await CommentModel
            .findById(commentId)
        );
        res.send(
            {
                success: 1,
                data: comment
            });
    } catch (err) {
        res.status(400).send({ success: 0, data: [], message: err.message });
    }
}

module.exports = { createComment, deleteComment, updateComment, getComment, getComments }