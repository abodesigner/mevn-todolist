const Todo = require("../models/todo");

// Add New tODO
const addTodo = async (req, res) => {
    const todo = new Todo(req.body);
    try {
        await todo.save();
        res.status(201).send(todo);
    } catch (error) {
        res.status(500).send(error)
    }
}

// Get all todos
const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find({});
        if (!todos) {
            res.status(404).send({error: "Invalid"})
        }
        res.send(todos);
    } catch (error) {
        res.status(500).send(error)
    }
}

// Get Single Post
const getTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).send()
        }
        res.send(todo);
    } catch (error) {
        res.status(500).send(error);
    }
}

// Update Todo
const updateTodo = async (req, res) => {
    try {

        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidator: true, useFindAndModify: false })

        if(!updatedTodo) {
            return res.status(404).send()
        }

        res.send(updatedTodo);
    } catch (error) {
        res.status(500).send(error)
    }
}

// Delete Single todo
const deleteTodo = async (req, res) => {
    try {
        const todoFound = await Todo.findByIdAndDelete(req.params.id)
        if (!todoFound) {
            res.status(404).send({error: 'Item already deleted or Not Found'});
        }
        res.send(todoFound)
    } catch (error) {
        res.status(501).send(error)

    }
}

// Delete all todos
const deleteAllTodos = async (req,res) => {
    try {
        const isEmpty = await Todo.deleteMany({});

        if (!isEmpty) {
            res.status(404).send({error: 'invalid delete'})
        }
        res.status(200).send({ msg : `All items removed` });
    } catch (error) {
        res.status(501).send(error)
    }
}

module.exports = {
    addTodo,
    getAllTodos,
    getTodo,
    updateTodo,
    deleteTodo,
    deleteAllTodos
}