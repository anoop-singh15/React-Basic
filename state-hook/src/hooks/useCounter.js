import {useState} from 'react'

function useCounter(initalState=0,value=1) {
      const [count,setCount]=useState(initalState);
    
        const increment=()=>{
            setCount(prev=>prev+value);
        }
        const decrement=()=>{
            setCount(prev=>prev-value);
        }
        const reset=()=>{
            setCount(initalState);
        }
    
        return [count,increment,decrement,reset]
    
}

export default useCounter