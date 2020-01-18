import React from 'react';

const SearchPanel = () => {
  const searchText = 'Type here to search';//Значение свойства(атрибута)
  const searchStyle = {
    fontSize: '20px'
  };
  return <input placeholder={searchText} style={searchStyle} className ="foo" htmlFor="" />;
};

export default SearchPanel;
