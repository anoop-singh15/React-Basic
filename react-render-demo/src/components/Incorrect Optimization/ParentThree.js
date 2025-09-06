import React,{useState} from 'react'
import { MemoizedChildFour} from './ChildFour';

export const ParentThree = () => {
    const [count,setCount]=useState(0);
    const [name,setName]=useState('Hello');

    console.log("ParentThreeRender");
    return (
    <div>
        <button onClick={()=>setCount(c=>c+1)}>Count - {count}</button>
        <button onClick={()=>setName('World')}>Name - {name}</button>
        {/* <MemoizedChildThree name={name}>
            <strong>Hello</strong>
            
        </MemoizedChildThree> */}

        <MemoizedChildFour name={name}></MemoizedChildFour>
      
    </div>
  )
}
