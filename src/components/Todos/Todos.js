import React, { useState } from 'react';
import Todo from './Todo/Todo';
import AddTodo from './AddTodo/AddTodo';
import getId from '../../helpers/generateId';
import './Todos.css';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = newTodo => {
    setTodos([...todos, { message: newTodo, isCompleted: false, id: getId() }]);
  };
  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const handleCompleteStatus = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    );
  };
  const myTodos = todos.map(todo => (
    <Todo
      key={todo.id}
      id={todo.id}
      message={todo.message}
      isCompleted={todo.isCompleted}
      handleDeleteTodo={handleDeleteTodo}
      handleCompleteStatus={handleCompleteStatus}
    />
  ));

  return (
    <div>
      <ul>{myTodos}</ul>
      <AddTodo handleAddTodo={handleAddTodo} />
    </div>
  );
};

export default Todos;
