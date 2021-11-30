const Todo = require("../model/Todo");

async function fetchTodo(req, res) {
    try {
        let payload = await Todo.find(req.body);

        res.json({ message: "success", payload });
    } catch (error) {
        res.status(500).json({ message: "failure", error: error.message });
    }
}

async function createTodo(req, res) {
    try {
        const newTodo = new Todo({
        todo: req.body.todo,
        });

        let savedNewTodo = await newTodo.save();

        res.json({ message: "success", payload: savedNewTodo });
    } catch (error) {
        res.status(500).json({ message: "failure", error: error.message });
    }
}

async function updateTodoById(req, res) {
    try {
        let updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        });

        res.json({ message: "success", payload: updatedTodo });
    } catch (error) {
        res.status(500).json({ message: "failure", error: error.message });
    }
}

async function deleteTodoById(req, res) {
    try {
        let deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: "success", payload: deletedTodo });
    } catch (error) {
        res.status(500).json({ message: "failure", error: error.message });
    }
}

module.exports = {
    fetchTodo,
    createTodo,
    updateTodoById,
    deleteTodoById,
};