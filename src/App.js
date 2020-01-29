import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className='App'>
      <h1>Todo App</h1>
      <Todos />
    </div>
  );
}

export default App;
