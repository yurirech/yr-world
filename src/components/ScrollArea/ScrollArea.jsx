import React from "react";

const styleScrollArea = {
  overflowY: 'scroll',
};

const ScrollArea = props => {
  return (
    <div style={styleScrollArea} className='scroll-area'>
      {props.children}
    </div>
  );
};

export default ScrollArea;
