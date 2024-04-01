import React from 'react'

function Emoji() {
    const a = prompt("enter a value:");
    const b = prompt("enter a value-2:");
    const c = prompt("enter a value-3:");
 
    if(a==b && b==c){
       alert(" 😄");
    }
    else{
        alert(" 😢");
    }
  return (
    <div>
      
    </div>
  )
}

export default Emoji
