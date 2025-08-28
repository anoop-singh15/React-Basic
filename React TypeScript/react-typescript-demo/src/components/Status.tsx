import React from 'react'
type StatusProps={
    status:'loading'|'error'|'success'
}
export const Status = (props:StatusProps) => {
    let message;
    if(props.status==="loading")
    {
        message='Loading...'
    }else if(props.status==='success')
    {
        message='Data Fetched Successfully'
    }
    else if(props.status==="error"){
        message='Error Fetching Data'
    }

  return (
    <div>
        <h2>Status - {message}</h2>
        <h2>Data Fetched Successfully</h2>
        <h2>Error fetching data</h2>
    </div>
  )
}
