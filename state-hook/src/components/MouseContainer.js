import React,{useEffect, useState} from 'react'
import HookMouse from './HookMouse';

function MouseContainer() {
    const [display,setDisplay]=useState(true);
    useEffect(()=>{
        console.log(display);
    },[display]);
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
        {
            // short circuit conditions
            display && <HookMouse/>
        }
        
    </div>
  )
}

export default MouseContainer