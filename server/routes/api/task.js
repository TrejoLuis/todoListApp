const express = require('express');
const router = express.Router();
const taskController = require('../../controllers/taskController');

router.route('/')
    .get(taskController.getAllTasks)
    .post(taskController.createNewTask);

router.route('/:id')
    .get(taskController.getTask)
    .put(taskController.updateTask)
    .delete(taskController.deleteTask);

module.exports = router;