import React, { Component } from 'react'
import { UserConsumer } from './userContext'

 class ComponentF extends Component {
  render() {
    return (
     <UserConsumer>
        {
            (username)=>{
                return <h3>{username} World</h3>
            }
        }
     </UserConsumer>
    )
  }
}

export default ComponentF