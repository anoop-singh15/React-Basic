import React, { useState, useContext } from 'react'

import { UserContext } from './UserContext'



function User() {

    const userContext = useContext(UserContext)

    const handleLogin = () => {
      
            userContext.setUser({
                name: 'hh',
                email: 'awdawdawd',
            })
      
        // if (userContext) {
        //     userContext.setUser({
        //         name: 'hh',
        //         email: 'awdawdawd',
        //     })
        // }
    }

    const handleLogout = () => {
     
            userContext.setUser(null)
       
        // if (userContext) {
        //     userContext.setUser(null)
        // }
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>user name is {userContext?.user?.name}</div>
            <div>user email is {userContext?.user?.email}</div>
        </div>
    )
}

export default User