import React from 'react';

function AddTodoForm({ onAddTodo }) {
  const handleAddTodo = (event) => {
    onAddTodo(todoTitle);
    event.preventDefault();

    const todoTitle = event.target.elements.todoTitle.value;
    console.log(todoTitle);
    event.target.reset();
  };
  return (
    <div>
     
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input type="text" id="todoTitle" name="title" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;