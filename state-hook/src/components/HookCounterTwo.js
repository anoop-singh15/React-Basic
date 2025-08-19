import React, { useState } from 'react'

function HookCounterTwo() {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const HandleIncrement = (initialCount) => {
        setCount(count + 1);
    }



    const HandleDecrement = (initialCount) => {
        setCount(count - 1);
    }

    const HandleReset = (initialCount) => {
        setCount(0);
    }

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount((prevCount) => {
                return prevCount + 1
            });
        }
    }

    return (
        <div>

            count : {count}
            {/* <button onClick={HandleIncrement}>Increment Count</button>
        <button onClick={HandleDecrement}>Decrement Count</button>
        <button onClick={HandleReset}>Reset</button> */}
            <button onClick={() => setCount((prevCount) => {
                return prevCount + 1
            })}>
                Increment Count
            </button>


            <button onClick={() => setCount((prevCount) => {
                return prevCount - 1
            })}>
                Decrement Count
            </button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={incrementFive}>Increment 5</button>

        </div>
    )
}

export default HookCounterTwo