import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetchingReducerOne() {
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState('');
    const [post,setPost]=useState({});

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/10').then((res)=>{
            setLoading(false);
            setPost(res.data);
            setError('')
        }).catch(err=>{
            setLoading(false);
            setPost({});
            setError("Something Went Wrong!!!");
        })
    },[])

  return (
    <div>
        {
            loading ?'Loading':post.title
        }
        {
            error?error:null
        }
    </div>
  )
}

export default DataFetchingReducerOne