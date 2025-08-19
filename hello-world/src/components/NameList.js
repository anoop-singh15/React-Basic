import React from 'react'
import Person from './Person';
function NameList() {

    const names=['bac','Bac','aaad','daaaaaa','Bac'];

    const nameList= names.map((value,index,array)=>{
                return <h1 key={index}>{index} {value}</h1>;
            })

        const Persons=[
            {
                id:1,
                name:'a',
                age:28,
                skill:'next.js'
            },
            {
                id:2,
                name:'b',
                age:28,
                skill:'Angular'
            },
            {
                id:3,
                name:'c',
                age:28,
                skill:'vue'
            }



        ]     
        
    const personList=Persons.map((person)=>{
       return <Person key={person.id} person={person}></Person>
    })

  return (
    <div>
       
       {/* {nameList} */}
       {/* {personList} */}

       {nameList}

        
    </div>
  )
}

export default NameList;