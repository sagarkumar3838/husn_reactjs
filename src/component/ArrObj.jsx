import React from 'react'

import { useState } from 'react'

function ArrObj() {

    const [movies , setMovies ] = useState([
        {id:1, name: "spider man"},
        {id:2 , name: "dark knight"}
    ])

    const changeName = () => {setMovies(movies.map(m => m.id === 1 ? {...movies , name: "john wick 4"} : m))}
  return (
   
    <div>
    {movies.map((m)=>(
        <li key={Math.random()}>{m.title}</li>
    ))}

     <button key={changeName}>changeName</button>
    </div>
  )
}

export default ArrObj
