import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({});
    const [id,SetId]=useState(1);
    const [idFromButtonClick,setIdFromButtonClick]=useState(1);


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`).then(res => {
            console.log(res);
            setPost(res.data);
        }).catch(err => {
            console.log(err);
        })
        
    },[idFromButtonClick])

    const postIdChange=(e)=>{
        SetId(e.target.value);
    }

    const HandleClick=()=>{
        setIdFromButtonClick(id);
    }

    return (
        <div>
            <input type="text" value={id} onChange={postIdChange} />
            {/* <ul>
                {
                    posts && posts.map((post) => (
                        <li key={post.id}> {post.title}</li>
                    ))
                }
            </ul> */}
            <div>{post.title}</div>
            <button onClick={HandleClick}>Fetch Post</button>
        </div >
    )
}

export default DataFetching