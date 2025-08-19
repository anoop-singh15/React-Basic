import  { useState } from 'react'
// import { useSelector,useDispatch } from 'react-redux'
import {useAppSelector,useAppDispatch} from '../../app/hooks';

import {ordered,restocked} from './iceCreamSlice'

function IceCreamView() {

  const numOfIcecream=useAppSelector((state)=>state.icecream.numOfIceCream);
  const dispatch=useAppDispatch();
  const [value,setValue]=useState(1);

  const handleOrder=()=>{
      dispatch(ordered());
      
  }

  // const handleRestock=()=>{
  //     dispatch(restocked());
  // }

  return (
    <div>
         <h2>Number of ice creams - {numOfIcecream}</h2>
         <input type="number" name="value" onChange={(e)=>setValue(parseInt(e.target.value)||1)} />
         <br />
        <button onClick={handleOrder}>Order ice creams</button>
        <button onClick={()=>dispatch(restocked(value))}>Restock ice creams</button>
    </div>
  )
}

export default IceCreamView