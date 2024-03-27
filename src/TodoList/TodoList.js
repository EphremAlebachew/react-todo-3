import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';


const list = [
  {
    title: "react",
    url: "http://reactjs.org",
    author: "jordan",
    num_comment: 3,
    points: 4,
    objectId: 0,
  },
  {
    title: "redux",
    url: "http://redux.org",
    author: "Dan",
    num_comment: 2,
    points: 5,
    objectId: 1,
  },

];

function TodoList() {
  return (
    <div>
      <h1>Todo List</h1>
      <h1>Hello react</h1>
      <h5>Hello react</h5>
      <label htmlFor="search">search: </label>
      <input id="search" type="text" />
      <ul>
        {list.map((todo) => (
          <TodoListItem key={todo.objectId} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;