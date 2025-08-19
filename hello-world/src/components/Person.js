import React from 'react'


// {person } so that we dont have to use props.person.name
function Person({person}) {
  return (
    <div>
        <h2>Iam {person.name} , {person.age} years old.I know {person.skill}</h2>
    </div>
  )
}

export default Person