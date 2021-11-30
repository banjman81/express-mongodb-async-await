var express = require("express");
var router = express.Router();

const {
    fetchTodo,
    createTodo,
    updateTodoById,
    deleteTodoById,
} = require("./controller/todoController");

/* GET home page. */
router.get("/", fetchTodo);
router.post("/create-todo", createTodo);
router.put("/update-todo-by-id/:id", updateTodoById);

router.delete("/delete-todo-by-id/:id", deleteTodoById);

module.exports = router;