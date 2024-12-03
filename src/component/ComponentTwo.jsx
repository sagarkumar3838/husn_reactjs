import React from 'react'

function ComponentTwo({count , onClickHandler}) {
  return (
    <div>
      <button onClick={onClickHandler}>decrement</button>
    </div>
  )
}

export default ComponentTwo
