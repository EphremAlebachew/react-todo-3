import React from 'react'
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
  
const name = "react";
 function TodoList() {
  return (
      <div>
          <h1>Todo List</h1>
       <h1>Hello {name} </h1>
      <label htmlFor="search">search: </label>
      <input id="search" type="text" />
      <ul>
        {list.map(function (item) {
          return (
            <li key={item.objectId}>
              {/* {item.title} */}
              <span>
                <a href={item.url}>{item.title} </a>
              </span>
            </li>
            //  <li>1</li>
          );
        })}
      </ul>
    </div>
  )
}
export default TodoList;
