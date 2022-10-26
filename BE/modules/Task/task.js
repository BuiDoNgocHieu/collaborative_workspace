const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    description:{
        type: String,
        
    },
    status:{
        type: String,
        require: true
    },
    backlogID:{
        type: mongoose.Types.ObjectId,
        require: true
    },
    sprintID:{
        type: mongoose.Types.ObjectId
    },
    assignee:{
        type: mongoose.Types.ObjectId,
        require:true
    },
    reporter:{
        type: mongoose.Types.ObjectId,
        require:true
    }
  
  }, 
  {
    // tự động thêm createdAt, updatedAt
    timestamps: true
  });
  
  const TaskModel = mongoose.model('User', TaskSchema);
  
  module.exports = TaskModel;
  