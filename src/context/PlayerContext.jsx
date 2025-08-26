import { createContext, useState } from "react";

export const PlayerContext= createContext();

export const PlayerProvider=({children})=>{
    const [players,setPlayers]=useState([
        {id:1,name:"shamil",age:26},
        {id:2,name:"messi",age:39}
    ])
    const userId=1
    const [count,setCount]=useState(1)
    return (
        <PlayerContext.Provider value={
            {players,
            setPlayers,
            userId,
            count,
            setCount
            }}>
            {children}
        </PlayerContext.Provider>
    )
}