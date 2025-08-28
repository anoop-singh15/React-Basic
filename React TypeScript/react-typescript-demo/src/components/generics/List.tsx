import React from 'react'

type ListProps<T>={
    items:T[];
    onClick:(value:T)=>void;
}

export const List = <T extends {id:number}>({items,onClick}:ListProps<T>) => {
  return (
    <div>
        <h3> List of items</h3>
        {
            items.map((item,index)=>{
                return (
                    <div key={item.id} onClick={()=>onClick(item)}>{String(item)}</div>
                )
            })
        }
    </div>
  )
}
