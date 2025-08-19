import React,{useReducer} from 'react'


const initalState=0;
const reducer=(currState,action)=>{
    switch(action){
        case 'increment':
            return currState+1
        case 'decrement':
            return currState-1
        case 'reset':
            return initalState
        defaut:
        return currState      
    }

}

function ReducerCounterOne() {
   const [count,dispatch]= useReducer(reducer,initalState)
  
    return (
    <div>
           <h1>Count - {count}</h1>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}> Decrement</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}

export default ReducerCounterOne