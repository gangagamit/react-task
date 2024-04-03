import React from 'react'

function EEmoji() {
    const a = prompt("enter a 😄");
    const b = prompt("enter a 👍");
    const c = prompt("enter a 😄");
 
    if(a===b && b===c && a===c){
       alert("Value are same 😄");
    }
    else{
        alert("Value are not same😢");
    }
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default EEmoji;