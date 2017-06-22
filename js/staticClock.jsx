import React from 'react';


function StaticClock(props){
  return (
    <h3> {props.msg} {new Date().toLocaleTimeString()}</h3>
  );
}

export default StaticClock;
