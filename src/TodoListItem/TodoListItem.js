import React from 'react';

function TodoListItem(props) {
  const { todo } = props;

  return (
    <li>
      <span>
        <a href={todo.url}>{todo.title}</a>
      </span>
    </li>
  );
}

export default TodoListItem;