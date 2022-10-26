const express = require('express');
const router = express.Router();

const taskController = require('./task.controller');

router.post('/', taskController.createTask)
module.exports = router;