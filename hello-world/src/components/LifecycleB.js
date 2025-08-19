import React, { Component } from 'react'

 class LifecylceB extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"Hello World"
    }
    console.log("LifeCycelB Constructor");
  }

  static getDerivedStateFromProps(state,props)
  {
    console.log("LifeCycleB getDerivedStateFromProps method");
    return null;
  }

  componentDidMount()
  {
      console.log("LifecycleB ComponentDidMount");
  }

  
  shouldComponentUpdate()
  {
      console.log("LifecycleB shouldComponentUpdate");
      return true;
  }
  
  getSnapshotBeforeUpdate(preProps,prevState)
  {
    console.log("LifecycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate()
  {
    console.log("LifecycleBcomponentDidUpdate")
  }


  render() {
    console.log("LifeCycleB Render")
    return (
      <div>LifecylceB</div>
    )
  }
}

export default LifecylceB;