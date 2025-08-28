import React from 'react'

type StyleProps={
    styles: React.CSSProperties
}


function Container(props:StyleProps) {
  return (
    <div style={props.styles}>
        Text Context

    </div>
  )
}

export default Container