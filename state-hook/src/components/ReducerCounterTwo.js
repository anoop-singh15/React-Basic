import React,{useReducer} from 'react'


const initalState={
    firstCounter:0,
    secondCounter:10
}
const reducer=(currState,action)=>{
    switch(action.type){
        case 'increment':
            return {...currState,firstCounter:currState.firstCounter+action.value}
        case 'decrement':
               return {...currState,firstCounter:currState.firstCounter-action.value}
        case 'increment2':
            return {...currState,secondCounter:currState.secondCounter+action.value}
        case 'decrement2':
            return {...currState,secondCounter:currState.secondCounter-action.value}
        case 'reset':
            return initalState
        defaut:
        return currState      
    }

}



function ReducerCounterTwo() {
   const [count,dispatch]= useReducer(reducer,initalState)
    
      return (
      <div>
             <h1>Counter one = {count.firstCounter}</h1>
             <h1>Counter two = {count.secondCounter}</h1>
          <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
          <button onClick={()=>dispatch({type:'decrement',value:1})}> Decrement</button>
          <button onClick={()=>dispatch({type:'increment',value:5})}>Increment 5</button>
          <button onClick={()=>dispatch({type:'decrement',value:5})}> Decrement 5</button>

          <div>
             <button onClick={()=>dispatch({type:'increment2',value:1})}>Increment second Counter</button>
          <button onClick={()=>dispatch({type:'decrement2',value:1})}> Decrement second Counter</button>
          </div>
          <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
      </div>
    )
  
}

export default ReducerCounterTwo