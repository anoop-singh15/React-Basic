import React,{useState} from 'react'

function HookCounter() {
    const[count,setCount]=useState(0);

    const HandleClick=()=>{
        setCount(count+1);
    };


  return (
    <div>
        <button onClick={HandleClick}>Count {count}</button>
        {/* <button onClick={()=>setCount(count+1)}>Count {count}</button> */}
    </div>
  )
}

export default HookCounter