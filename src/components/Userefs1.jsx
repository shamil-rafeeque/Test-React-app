import {React,useRef,useEffect} from 'react'

function Userefs1() {
    const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Click the button to focus me" />
      <button onClick={focusInput}>Focus the Input</button>
    </div>
  );
}
//     const inputRef = useRef(null); // 🟢 create the ref

//     useEffect(() => {
//       // 🔁 runs after the component is mounted
//     //   inputRef.current.focus(); // 🔍 focuses the input element
//     }, []);
  
//     return (
//       <div>
//         <h3>Auto Focus Input Box</h3>
//         {/* <input ref={inputRef} placeholder="Type here..." /> */}
//         <input  placeholder="Type here..." />
//       </div>
//     );
//   }
export default Userefs1