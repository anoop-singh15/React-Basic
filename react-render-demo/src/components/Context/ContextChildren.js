import React, { useContext } from 'react'
import { countContext } from './ContextParent'

export const ChildA= () => {
    console.log('Child A render')
  return (
    <>
        <div>
            ChildA
        </div>
        <ChildB></ChildB>
    </>
  )
}

export const MemoizedChildA=React.memo(ChildA);

export const ChildB= () => {
    console.log('Child B render')
  return (
    <>
        <div>
            ChildB
        </div>
        <ChildC></ChildC>
    </>
  )
}
export const ChildC= () => {
    console.log('Child C render')
    const count=useContext(countContext)
  return (
    <>
        <div>
            ChildC count = {count}
        </div>
       
    </>
  )
}


