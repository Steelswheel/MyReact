import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => {//React-компонент

  const elements = todos.map((item) => {
    return (<li>
    <TodoListItem {...item} />
    </li>);
  });

  return (//React-элемент
    <ul>
      {elements}
    </ul>
  );
};

export default TodoList;
