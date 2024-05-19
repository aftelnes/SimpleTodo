"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../store/todoSlice";
import { AddTodoModal } from "./AddTodoModal";
import TodoList from "./TodoList";

import styles from "./App.module.css";

export default function App() {
  const [todoTextDics, setTodoTextDics] = useState("");
  const [todoTextHeader, setTodoTextHeader] = useState("");

  const dispatch = useDispatch();

  const handleAction = () => {
    if (todoTextDics.trim().length) {
      dispatch(addTodo({ todoTextDics, todoTextHeader }));
      setTodoTextDics("");
      setTodoTextHeader("");
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.todolist1}>
        <h1 className={styles.h1}>Todos</h1>
        <TodoList />
      </div>

      <AddTodoModal
        valueDics={todoTextDics}
        updateTextDisc={setTodoTextDics}
        valueHeader={todoTextHeader}
        updateTextHeader={setTodoTextHeader}
        handleAction={handleAction}
      />
    </div>
  );
}
