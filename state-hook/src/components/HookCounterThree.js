import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({ firstName: '', lastName: '' });


    const firstNameChange = (e) => {
        setName((prev) => ({
            ...prev,
            firstName: e.target.value
        }))
    }
    const lastNameChange = (e) => {
        setName((prev) => ({
            ...prev,
            lastName: e.target.value
        }))
    }


    return (
        <div>
            <form >
                {/* <input type="text" value={name.firstName} onChange={firstNameChange}/>
            <input type="text" value={name.lastName} onChange={lastNameChange}/> */}
                <input type="text" value={name.firstName} onChange={e => setName({...name,firstName:e.target.value})}/>
                <input type="text" value={name.lastName} onChange={e => setName({...name,lastName:e.target.value})}/>
                
                <h2>Your FirstName is {'==> '}  {name.firstName}</h2>
                <h2>Your LastName is {"==>  "}{name.lastName}</h2>
            </form>
        </div>
    )
}

export default HookCounterThree