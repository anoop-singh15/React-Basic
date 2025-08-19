import React,{useState,useEffect,useRef} from 'react'

function RefHookTimer() {
    const intervalRef=useRef();


    const [timer,setTimer]=useState(0);

    useEffect(()=>{
        intervalRef.current=setInterval(()=>{
            setTimer(prev=>prev+1);
        },1000)


        return ()=>{
            clearInterval(intervalRef.current);
        }

    },[])


  return (
    <div>
       Hook Timer - {timer} 
       <button onClick={()=>clearInterval(intervalRef.current)}>Clear Hook Timer</button>
    </div>
  )
}

export default RefHookTimer