import React, { Component } from 'react'
import LifecycleB from './LifecycleB';
 class Lifecylce extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"Hello World"
    }
    console.log("LifeCycelA Constructor");
  }

  static getDerivedStateFromProps(state,props)
  {
    console.log("LifeCycleA getDerivedStateFromProps method");
    return null;
  }

  componentDidMount()
  {
      console.log("LifecycleA ComponentDidMount");
  }

  shouldComponentUpdate()
  {
console.log("LifecycleA shouldComponentUpdate");
      return true;
  }
  
  getSnapshotBeforeUpdate(preProps,prevState)
  {
    console.log("LifecycleA getSnapshotBeforeUpdate")
    return null
  }

  componentDidUpdate()
  {
    console.log("LifecycleA componentDidUpdate")
  }

  changeState=()=>{
    this.setState({
      name:'earth'
    })
  }


  render() {
    console.log("LifeCycleA Render")
    return (
      <div>
        <div>LifeCycelA</div>
        <button onClick={this.changeState}>Change Sate</button>
        <LifecycleB/>
      </div>
    )
  }
}

export default Lifecylce;