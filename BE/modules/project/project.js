const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    type:{
        type: String,
        require: true
    },
    leadId:{
        type: mongoose.Types.ObjectId
    }
},
    {
        // tự động thêm createdAt, updatedAt
        timestamps: true
    });

const ProjectModel = mongoose.model('Project', ProjectSchema);

module.exports = ProjectModel;
