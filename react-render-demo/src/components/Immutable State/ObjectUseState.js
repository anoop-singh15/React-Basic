import React,{useState} from 'react'

const initState={
    fname:'Acb',
    lname:"cde"
}

export const ObjectUseState = () => {
    const [person,setPerson]=useState(initState);
  
  
    const changeName=()=>{
        // person.fname='xyz'
        // person.lname='efg'
        // setPerson(person)

        const newPerson={...person};
        newPerson.fname='clark';
        newPerson.lname='kent';
        setPerson(newPerson);
    }

    console.log("ObejectUseState Render");
  
    return (
    <div>
        <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}
