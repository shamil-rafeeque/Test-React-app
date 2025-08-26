import React, { useState } from 'react'
import '../css/profile.css'

function Todo() {
  const a=' Hello world '
  console.log("###################")
  console.log(a.toUpperCase())
  console.log(a.toLowerCase())
  console.log(a.replace('world','new world'))
  console.log(a.trimEnd())
  console.log(a.trimLeft())
  console.log(a.replaceAll("ll","?"))
  console.log(a.indexOf('world'))
  console.log(a.indexOf('z',4))
  console.log("###################")
  console.log(a.lastIndexOf("o"))
  console.log(a.search('world'))

  const [item,setItem]=useState('')
  const [itemlist,setItemList]=useState([])
  const AddTodo=()=>{
    console.log(item.trim('#'))
    if (item.trim()!==''){
      console.log(item,'Item')
      setItemList([...itemlist,item]);
      setItem('')
    }else{
      console.log("nothin")
    }
  }

  const removeItem=((indexes)=>{
    const updatList=itemlist.filter((_,index)=>index !==indexes);
    setItemList(updatList)
  })

  
  return (
    <div className='todo'>Todo
    {/* <input type='text-box'>name</input> */}
    <input 
      type='text'
      value={item}
      onChange={(e)=>setItem(e.target.value)}
      placeholder='enter task'
    />
    <div className='button-add'>

    <button onClick={AddTodo}>Add</button>
    </div>

    <h4>list all todos</h4>
    <ul>
      {itemlist.map((todo,index)=>(
        <li key={index}>{todo}
        {/* <button onClick={removeItem(index)}></button> */}
        <button onClick={()=>removeItem(index)}>❌</button>

        </li>
      ))}
      
      {/* {itemlist.map((todo,index)=>{
        <li key={index}>{todo}</li>
      )}} */}
      {/* <button>remove</button> */}
    </ul>
    </div>
  )
}

export default Todo