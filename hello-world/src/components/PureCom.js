import React, { PureComponent } from 'react'

 class PureCom extends PureComponent {
  render() {
    console.log("Pure Component render")
    return (
      <div>
        PureCom  {this.props.name}

      </div>
    )
  }
}

export default PureCom