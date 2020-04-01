import React from "react";
import './MainHeader.scss'

const MainHeader = props => {
  return (
    <div className='main-header'>
      <div> </div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default MainHeader;
