import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {ordered,restocked} from './iceCreamSlice'

function IceCreamView() {

  const numOfIcecream=useSelector((state)=>state.icecream.numOfIceCream);
  const dispatch=useDispatch();
  const [value,setValue]=useState(1);

  const handleOrder=()=>{
      dispatch(ordered(value));
      
  }

  const handleRestock=()=>{
      dispatch(restocked());
  }

  return (
    <div>
         <h2>Number of ice creams - {numOfIcecream}</h2>
         <input type="number" name="value" onChange={(e)=>setValue(parseInt(e.target.value))} />
         <br />
        <button onClick={handleOrder}>Order ice creams</button>
        <button onClick={()=>dispatch(restocked(value))}>Restock ice creams</button>
    </div>
  )
}

export default IceCreamView