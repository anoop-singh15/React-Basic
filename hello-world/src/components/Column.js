import React from 'react'

function Column() {
     const items=['aaa','aa'];
  return (
    
    <React.Fragment>
        {/* {
            items.map((item,index)=>{
                <React.Fragment key={item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                 </React.Fragment>
            })
        } */}
        <td>Name</td>
        <td>H</td>
    </React.Fragment>
  )
}

export default Column