import React,{useState,useEffect} from 'react'

function EffectCounterOne() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState('');


    useEffect(()=>{
      
      console.log("update called")

        document.title=`You Clicked ${count} Times`
    },[count]);

    const increment=()=>{
        setCount(count+1)
    }

   const HandleNameChange=(e)=>
    {
        setName(e.target.value)
    }

  return (
    <div>

        {/* <button onClick={()=>setCount(count+1)}>Clicked {count} Times</button> */}
        <input type="text" value={name} onChange={HandleNameChange} />
        <button onClick={increment}>Clicked {count} Times</button>
        
    </div>
  )
}

export default EffectCounterOne