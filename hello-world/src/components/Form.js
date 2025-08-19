import React, { Component } from 'react'
// Controlled Components

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic:'react'
        }
        //   this.HandleChange=this.HandleChange.bind(this)
    }

    HandleChange = (event) => {
        this.setState({
            username: event.target.value,
          
        })
    }
    HandleComments = (event) => {
        this.setState({
           
            comments:event.target.value
        })
    }

    HandleTopicChange=(event) => {
        this.setState({
            topic:event.target.value
        })
    }

    HandleSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
        event.preventDefault();
    }


    render() {

        // destructuring state
        const {username,comments,topic}=this.state;

        return (
           
                <form onSubmit={this.HandleSubmit}>
                    <div>
                        <label >UserName</label>
                        <input type="text" value={username} onChange={this.HandleChange} />


                    </div>
                    {/* for textarea */}
                    <div>

                        <label >Comments</label>
                        <textarea value={comments} onChange={this.HandleComments}></textarea>


                    </div>

                    {/* for select tag */}

                    <div>
                        <label >Topic</label>
                        <select value={topic} onChange={this.HandleTopicChange}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
           
        )
    }
}

export default Form;