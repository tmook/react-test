import React from 'react';

function NumberList(props){
  const m = props.multiplier != null ? props.multiplier : 1;
  const liElements = props.numbers.map( (number,index) => (<li key={index}>{number * m}</li>));

  return (
    <ul>
      {liElements}
    </ul>
  );
}

export default NumberList;
