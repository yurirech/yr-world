import React from 'react';

 const UnorderedList = props => {
  return (
  <div className='unordered-list'>
    <ul>
     {props.listItems.map(item => (
      <li>{item}</li>
     ))}
    </ul>
  </div>
  );
};


export default UnorderedList;
