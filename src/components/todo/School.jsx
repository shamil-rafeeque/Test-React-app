import React, { useEffect, useState } from 'react'
import '../css/school.css'

function School() {
  const [school,setSchool]=useState([])

  // useEffect(()=>{
  //   fetch("http://localhost:8005/school/school-list")
  //   .then((response)=>response.json())
  //   .then((data)=>{
  //     console.log(data,"###############")
  //     setSchool(data.result || [])
  //   })
  //   .catch((error)=>{
  //     console.log("error message",error)
  //   })
  // },[])

  const fetchSchool=()=>{
    fetch("http://localhost:8005/school/school-list")
    .then((response)=>response.json())
    .then((data)=>{
      setSchool(data.result || []);
    })
    .catch((error)=>{
      console.log("error");
    });
  };
  useEffect(()=>{
    fetchSchool()
  },[])

  const RemoveItem=(x)=>{
    fetch(`http://localhost:8005/school/school-delete/${x}/`,{
      method:"DELETE",
  })
    .then((res)=>{
      if (res.ok){
        console.log("deleted")
        fetchSchool()
      }else{
        console.log("failed to delete")
      }
    }   // after delete recall school list api

  ).catch((error)=>{console.log("eror")})}
  console.log(RemoveItem.x)
  
  console.log(school,'OOOOO')
  return (
    <div className='schools'>hai

      <ul>
        {school.map((item,id)=>
          <li key={id}>{item.name}
          {/* <button onClick={()=>{removeItem}}>X</button> */}
          <button onClick={()=>{RemoveItem(item.id)}}>X</button>
          <button onClick={()=>{}}>Update</button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default School