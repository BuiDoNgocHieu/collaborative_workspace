const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,

    },
    status: {
        type: String,
        require: true
    },
    backlogID: {
        type: mongoose.Types.ObjectId,
        require: true
    },
    sprintID: {
        type: mongoose.Types.ObjectId
    },
    assignee: {
        type: mongoose.Types.ObjectId,
        require: true
    },
    reporter: {
        type: mongoose.Types.ObjectId,
        require: true
    },
    date: {
        type: Date,
        require: true
    }

},
    {
        // tự động thêm createdAt, updatedAt
        timestamps: true
    });

const TaskModel = mongoose.model('Task', TaskSchema);

module.exports = TaskModel;
