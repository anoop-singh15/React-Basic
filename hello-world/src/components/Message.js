import React,{Component} from "react";

class Message extends Component{
    constructor(){
        super();
        this.state={
            message:'Message Component',
           x:0,
           bgColor:'white'
            
        };
        
       
    };

    
    // change()
    // {
    //     if(this.state.x===20)
    //     {
    //         this.setState({
    //             bgColor:'pink'
    //         })
    //     }
    //         this.setState({
    //             message:`U Clicked Button ${this.state.x} Times`,
    //             x:this.state.x+1
    
    //         })
    // }
    change()
    {
        if(this.state.x===20)
        {
            this.setState({
                bgColor:'pink'
            })
        }
            this.setState({
                message:`U Clicked Button ${this.state.x} Times`,
                x:this.state.x+1
    
            })
    }
    
    render()
    {
        const {message,x,bgColor}=this.state;
        console.log(message);
        return (
            <div style={{backgroundColor: bgColor}}>
                <h1>{message} </h1>
                <button onClick={()=>this.change()}>CHANGE</button>
            </div>
        );
    };
};

export default Message;