import React from 'react';
import './Todo.css';
const Todo = ({
  id,
  message,
  isCompleted,
  handleDeleteTodo,
  handleCompleteStatus
}) => {
  const completeButton = isCompleted ? 'UNDO' : 'DONE';
  return (
    <li style={{ color: isCompleted ? 'green' : 'black' }}>
      {message}
      <button onClick={() => handleDeleteTodo(id)}>Delete</button>
      <button onClick={() => handleCompleteStatus(id)}>{completeButton}</button>
    </li>
  );
};

export default Todo;
