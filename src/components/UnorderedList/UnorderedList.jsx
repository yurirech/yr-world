import React from 'react';

 const UnorderedList = props => {
  return (
  <div className='unordered-list'>
    <ul>
     {props.listItems.map((item, i) => (
      <li key={i}>{item}</li>
     ))}
    </ul>
  </div>
  );
};


export default UnorderedList;
