import React, { useState } from "react";

export default function Todolist({ todos }) {
  const [todoList, setTodoList] = useState(todos);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const addTodo = () => {
    const newTodo = {
      id: todoList.length + 1,
      title: newTodoTitle,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Add todo"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </form>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
