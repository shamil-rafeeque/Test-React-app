import { useRef, useEffect, useState } from 'react';

function Userefs() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1); // start from 1

  useEffect(() => {
    renderCount.current += 1;
    console.log("hello")
  });

  return (
    <div>
      <p>Clicked {count} times</p>
      <p>Component re-rendered {renderCount.current} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button> 
    </div>
  );
}


export default Userefs