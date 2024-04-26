import React from 'react';

function List({ items }) {
  const itemList = items.map((item) => (
    <li key={item} id={item}>
      {item}
    </li>
  ));
  return <ul>{itemList}</ul>;
}

export default List;
