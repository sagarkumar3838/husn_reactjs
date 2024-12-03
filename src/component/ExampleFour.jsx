import React, { useEffect, useState } from 'react'

const ExampleFour = () => {

    const [name , setName] = useState(()=>{
        const savedName = localStorage.getItem("name");
        return savedName ? JSON.parse(savedName): "";
    })

    useEffect(()=>{
        localStorage.setItem("name", JSON.stringify(name))
    })

    const handleChange = (e)=>{
        setName(e.target.value);
    }

    const handleClear = () => setName("");
  return (
    <div>
      <h1>your Name: {name}</h1>
      <input type="text" name="" id="" value={name} onChange={handleChange} placeHolder="Enter Your Name" />
      <button onClick={handleClear}>Clear</button>
    </div>
  )
}

export default ExampleFour
