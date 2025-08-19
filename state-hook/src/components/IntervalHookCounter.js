import React,{useState,useEffect} from 'react'

function IntervalHookCounter() {
    const [count,setCount]=useState(0);
    const [min,setMin]=useState(0);

    const tick=()=>{
        setCount(prevCount=>prevCount+1);
     
        // setCount(count+1);
    }

    // useEffect(()=>{
    //     const interval=setInterval(tick,1000);

    //     return ()=>{
    //         clearInterval(interval);
    //     }

    // },[count]);

    // For prevCount 
    useEffect(()=>{
        const interval=setInterval(tick,1000);

        

        return ()=>{
            clearInterval(interval);
        }

    },[]);

    

    

  return (
    <div>
        <h1>{min} {count}</h1>

    </div>
  )
}

export default IntervalHookCounter