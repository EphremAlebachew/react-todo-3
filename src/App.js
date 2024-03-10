import { useState } from 'react';
// import React from "react";
import TodoList from "./TodoList/TodoList";
import AddTodoForm from "./AddTodoForm/AddTodoForm";


function App() {
  const [newTodo, setNewTodo] = useState('');
  return (
    <div>
      <p>New Todo: {newTodo}</p>
      <AddTodoForm onAddTodo={setNewTodo} />
      <TodoList />

      

    </div>
    
  );
}

export default App;


// function getArea(x, y) {
//   return x * y;
// }
// console.log(getArea(45,4))
//with terminal node.\Math.js run and get result