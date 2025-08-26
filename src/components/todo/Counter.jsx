import React, { useState } from 'react'
import '../css/counter.css'

function Counter() {
  const [counter,setCount]=useState(3)
  const MinusButton=()=>{
    setCount(counter-1)
    return counter
  }
  const Plusbutton=()=>{
    setCount(counter+1)
    return counter
  }
  return (
    <div>
    <div className='counter'>counter</div>
    <button onClick={MinusButton}>-</button>
    <h3>{counter+'number'}</h3>
    <button onClick={Plusbutton}>+</button>
    </div>
  )
}

export default Counter