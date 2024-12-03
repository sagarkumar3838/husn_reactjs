import React from 'react'

import { useState } from 'react';

const Counter = () => {
    const [count ,setCount] = useState(0);

    const changeNumber =()=>{setCount(count + 1)}
  return (
    <div>
     <p>{count}</p>
      <button onClick={changeNumber}>increment</button>
    </div>
  )
}

export default Counter
