import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         errorMsg:""
      }
    }
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            console.log(res); 
            this.setState({posts:res.data});  
        }).catch((error)=>{
            console.log(error);
            this.setState({
                errorMsg:"Error retreiving data"
            })
        })

    }

    render() {
        const {posts,errorMsg}=this.state;
    return (
      <>
        List of Posts
      
            {
                posts.length?
                posts.map((post)=>{
                    return <div key={post.id}>{post.id} {"--->"} {post.title}</div>

                }):<div>"No Posts Available"</div>
            }

            {
                errorMsg?<div>{errorMsg}</div>:null
            }
       

      </>
    )
  }
};

export default PostList