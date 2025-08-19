// Tutorial 16 Conditional Rendering



import React, { Component } from 'react'
class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    };
    render() {




        // 1 approach

        // if (this.state.isLoggedIn) {
        //     return <h1>
        //         Welcome User Abc
        //     </h1>
        // }
        // else {
        //     return <h1>Welcome Guest</h1>


        // }

        
        // 2nd Approach
        
        // let message;
        // if(this.state.isLoggedIn)
        // {
        //     message=<div>Welcome Abc</div>;
        // }
        // else{
        //     message=<h1>Welcome Guest</h1>;
        // }

        // return <div>{message}</div>

        // 3 Approach

        // return (
        //     this.state.isLoggedIn?
        //     <h1>Welcome Abc</h1>:
        //     <h1>Welcome Guest</h1>
        // );


        // 4 Short Circuit Approach

        return this.state.isLoggedIn && <h1>Welcome Abc</h1>
    }
}

export default UserGreeting;