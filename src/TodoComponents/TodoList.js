import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Todo from "./todo";

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
function TodoList({ todos, setTodos }) {
  console.log(todos);
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo) => (
            <Todo
              setTodos={setTodos}
              todos={todos}
              todo={todo}
              key={todo.id}
              text={todo.text}
              id={todo.id}
            />
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default TodoList;
