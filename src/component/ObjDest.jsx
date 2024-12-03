import React, { useState } from 'react'



function ObjDest() {
    const [movie , SetMovie] = useState({
        moviename : "dark knight",
        ratings: 10,
    })
    
    const handleChange = ()=> SetMovie({...movie, ratings:5})
  return (
    <div>
      <h1>Movie: {movie.moviename}</h1>
      <h2>Rarings : {movie.ratings}</h2>
      <button onClick={handleChange}>change ratings</button>
    </div>
  )
}

export default ObjDest
