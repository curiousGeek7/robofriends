import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '1px solid skyblue', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;