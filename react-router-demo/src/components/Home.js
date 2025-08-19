import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
  return (
    <>
    <h2>Home</h2>
      
      <button onClick={()=>navigate('order-summary',{replace:true})}>Place Order</button>
    </>
  )
}

export default Home