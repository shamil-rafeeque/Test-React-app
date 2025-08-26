import { useEffect, useState } from "react";

function Timer(){
    const [count,setCount]=useState(0)


    useEffect(()=>{
        console.log("hai")
    },[count])

    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}


export default Timer

