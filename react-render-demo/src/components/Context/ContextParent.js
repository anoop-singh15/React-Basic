import React, { useContext, useState } from 'react'
import {MemoizedChildA } from './ContextChildren'


export const countContext = React.createContext();

export const ContextParent = ({children}) => {

    const [count, setCount] = useState(0);
    console.log("ContextParent Render");

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count {count}</button>

            <countContext.Provider value={count}>
                {/* <MemoizedChildA></MemoizedChildA> */}
                {children}
            </countContext.Provider>
        </div>
    )
}
