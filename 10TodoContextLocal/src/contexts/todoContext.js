/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, todo) => {},
  toggleComplete: (id) => {},
});

export const usetodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
