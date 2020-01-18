import React from 'react';

const TodoListItem = ({label, important = false}) => {//Объект props

  const style = {
    color: important ? 'tomato' : 'black'
  };

  return <span style={style}>
    {label}
  </span>;
};

export default TodoListItem;
