import React from 'react';

function ActionLink(props){
  const linkName = props.name != null ? props.name : "link";

  function handleClick(e){
    e.preventDefault();
    console.log(linkName + ": was clicked");
  }

  return (
    <a href='#' onClick={handleClick}>{linkName}</a>
  );
}

export default ActionLink;
