import React, { Children } from 'react'

type OscarProps={
    children:React.ReactNode
}

function Oscar(props:OscarProps) {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default Oscar