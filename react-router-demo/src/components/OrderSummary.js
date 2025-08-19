import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSummary() {
  const navigate=useNavigate();
  return (
    <>
      <h3>
        Order Confirmed!!!!!!!
      </h3>
      <button onClick={()=>navigate(-1)}>Go Back</button>
    </>
  )
}

export default OrderSummary