import React, { useState } from 'react'
import '../css/newtodo.css'

function NewTodo() {
    const [item,setItem]=useState('')
    const [items,setItems]=useState([])
    console.log(item,'ITEM')
    console.log(items,'items')
    const AddItem=()=>{
        if (item.trim()!==''){
            console.log("##############")
            setItems([...items,item])
            setItem('')
        }
    }
    const removeTodo = (index) => {
        setItems(items.filter((_, i) => i !== index)); // filter usage
        console.log(setItem,"%%%%%%%%%%%")
      };
    //const 
  return (
    <div className='newtodo'>NewTodo
    <input type='textbox'
    placeholder='Enter a Task'
    value={item}
    onChange={(e)=>setItem(e.target.value)}
    >
    </input>
    <button onClick={()=>AddItem()}>ADD</button>


    <ul>
        ddd
        {items.map((todo,index)=>(
            <li key={index}>{todo}
            <button onClick={()=>{removeTodo(index)}}>X</button>
            </li>
        ))}

        
    </ul>


    
    
    
    </div>
  )
}   

export default NewTodo