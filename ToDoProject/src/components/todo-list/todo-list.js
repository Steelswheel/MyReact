import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';


const TodoList = ({ todos }) => {//React-компонент

  const elements = todos.map((item) => {//Key - для быстродействия(Reconciliation-алгоритм)

    const {id, ...itemProps} = item;

    return (<li key={id} className="list-group-item">
    <TodoListItem {...itemProps} />
    </li>);
  });

  return (//React-элемент
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
};

export default TodoList;
