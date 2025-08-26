import {React,useContext} from 'react'
import { PlayerContext } from '../context/PlayerContext'

function Home() {
  const {players,setPlayers,userId,count,setCount}=useContext(PlayerContext)
  const name="shamil"
  // setPlayers("abbas")

  // const addon=()=>{
  //   setPlayers([prev=>[...prev,{id:3,name:"rono",age:41}]
  //   ])

  // }
  const addPlayer = () => {
    setPlayers(prev => [
      ...prev,
      { id: prev.length + 1, name: 'Abbas', age: 28 }
    ]);
  };
  const countUpdate=()=>{
    setCount(count+1)
  }
  let isView=true
  function switchButton(){
    isView=false
  }

  
  console.log(players)
  return (
    <div>Home

      <h3>Players name {userId} {name}</h3>
      <ul>
        {players.map((p)=>(
          <li key={p.id}>
            {p.name}--{p.age}
          </li>
        ))}
      </ul>
      
      {isView ? <h3>hai</h3> : <h4>hello</h4>}
      <button onClick={switchButton()}>Click</button>
      
        <button onClick={addPlayer}>CLICk</button>
        <li>count number is :{count}</li>
        <button onClick={countUpdate}>PLUS</button>
    </div>
  )
}

export default Home