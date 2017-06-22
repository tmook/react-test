import React from 'react';

function AlphaList(props){
  const liElements = props.alphas.map( (alpha,index) => (<li key={index}>{alpha}</li>));

  return (
    <ul>
      {liElements}
    </ul>
  );
}

export default AlphaList;
