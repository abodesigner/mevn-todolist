const express = require("express");
const router = express.Router();

const todoController = require("../controller/todoController")

router.post("/api/todos",        todoController.addTodo);
router.get("/api/todos",         todoController.getAllTodos);
router.get("/api/todos/:id",     todoController.getTodo);
router.patch("/api/todos/:id",   todoController.updateTodo);
router.delete("/api/todos/:id",  todoController.deleteTodo);
router.delete("/api/todos",      todoController.deleteAllTodos);

module.exports = router