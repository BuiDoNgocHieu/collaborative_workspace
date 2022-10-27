require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./modules/auth/auth.router');
const taskRouter = require('./modules/Task/task.router');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Workspace', err => {
  if (err) {
    return console.log('DB connect err', err);
  }
  console.log('DB connect success');
});

const app = express();
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/task', taskRouter);

app.use('*', (req, res) => {
  res.send({ message: '404 not found' })
})

app.use((err,req,res,next)=>{
  console.error(err.stack);
  res.status.send({success:0,message:err.message})
})

app.listen(process.env.PORT || 6060, (err) => {
  if (err) {
    return console.log('Server Error', err);
  }
  console.log('Server started');
})