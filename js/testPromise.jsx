import React from 'react';


function TestPromise(props){
  console.log("1111");
  new Promise(() => {console.log("hello")}).then(console.log("world"));
  console.log("****");

  function first(){
    let p = new Promise(()=>console.log("hola"));
    setTimeout(()=>p.resolve(), 3000);
    return p.promise;
  }

  first().then(console.log("aloha"));
  

  return null;
}


export default TestPromise;
