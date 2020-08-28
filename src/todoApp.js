import React, { useState } from "react";
import "./todo.css";
import { AnimatePresence, motion } from "framer-motion";
import Form from "./TodoComponents/form";
import TodoList from "./TodoComponents/TodoList";

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100%",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100%",
    scale: 1.2,
  },
};
const pageTransition = {
  duration: 1,
  ease: "anticipate",
};
function TodoApp() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <motion.div
      style={{ position: "absolute", width: "100%", textAlign: "center" }}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>Todo List</h1>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </motion.div>
  );
}

export default TodoApp;
