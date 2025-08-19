import React, { useState } from 'react'
import useInput from '../hooks/useInput';

function CustomHookUserForm() {

    // const [firstName, setFirstName] = useState('');
    // const [lastName, setlastName] = useState('');


    // const handleChangeFirst = (e) => {
    //     setFirstName(e.target.value);
    // }

    // const handleChangeLast = (e) => {
    //     setlastName(e.target.value);
    // }

    
    const [firstName,bindFirstName,resetFirstName]=useInput('');
    const [lastName,bindLastName,resetLastName]=useInput('');
    
    
        const handleSubmit=(e)=>{
            // e.preventDefault();
            alert(`form submitted by ${firstName} ${lastName}`)
            resetFirstName()
            resetLastName()
        }



    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="firstName">First Name : </label>
                    {/* <input type="text"  id='firstName'  value={firstName} onChange={handleChangeFirst} /> */}
                    <input type="text"  id='firstName'  {...bindFirstName} />

                </div>
                <div>
                    <label htmlFor="lastName">Last Name : </label>
                    {/* <input type="text" id='lastName' value={lastName} onChange={handleChangeLast} /> */}
                    <input type="text" id='lastName' {...bindLastName}/>

                </div>

                <button type="submit">Submit</button>


            </form>
        </div>
    )
}

export default CustomHookUserForm