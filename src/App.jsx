import React, { useState } from 'react'
import Count from './component/Count'
import Friend from './component/Friend'
import ObjDest from './component/objDest'
import ArrObj from './component/ArrObj'
import ComponentOne from './component/ComponentOne'
import ComponentTwo from './component/ComponentTwo'
import ExampleThree from './component/ExampleThree'
import ExampleFour from './component/ExampleFour'
import Counter from './component/Counter'
import TodoList from './component/TodoList'
import Profile from './component/Profile'
import ShoppingList from './component/ShoppingList'


function App() {
  const [count , setCount] = useState(0)

  return (
    <div>
    <ShoppingList/>
    <Profile/>
    <TodoList/>
    <Counter/>
    <ExampleFour/>
    <ExampleThree/>
     <ComponentOne count={count} onClickHandler={() => setCount(count + 1)}/>
     <ComponentTwo count={count} onClickHandler={() => setCount(count - 1)}/>
     <ArrObj/>
     <ObjDest/>
     <Friend/>
     <Count/>  
    </div>
  )
}

export default App
