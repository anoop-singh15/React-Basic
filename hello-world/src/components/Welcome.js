// CLASS Component

import React,{Component} from "react";  

class Welcome extends Component{
    // this.props.name="XYZ";
    render()
    {
        const {name,age}=this.props;
        return <h1>
            {/* Class Component {this.props.name} Age = {this.props.age}  */}
            Destructuring class Component "{name}" Age = "{age}"
        </h1>;
    }
};

export default Welcome;

