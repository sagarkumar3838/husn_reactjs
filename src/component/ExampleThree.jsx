import React from 'react'
import { useState } from 'react';

const ExampleThree = () => {
   const [randomNumber , setRandomNumber] = useState(()=> Math.floor(Math.random()* 100));
   
   const nameChange = () =>{
    const newNumber = Math.floor(Math.random() * 100)
      setRandomNumber(newNumber);
    

   }
  return (
    <div>
       <h1>Random Number: {randomNumber}</h1>  
       <button onClick={nameChange}>Generate New Number</button>
    </div>
  )
}

export default ExampleThree
