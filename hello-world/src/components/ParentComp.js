import React, { Component, PureComponent } from 'react'
import RegularComp from './RegularComp'
import PureCom from './PureCom'
import MemoComp from './MemoComp'

 class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'ParentComp'
      }
    }

    componentDidMount()
    {
        setInterval(()=>{this.setState({
            name:'ParentComp'
        })},2000)
    }

  render() {
    console.log("#################################Parent Component render#################################")
    return (
      <div>ParentComp

        <MemoComp name={this.state.name}/>
        {/* <RegularComp name={this.state.name}></RegularComp>
        <PureCom name={this.state.name}></PureCom> */}
      </div>
    )
  }
}

export default ParentComp