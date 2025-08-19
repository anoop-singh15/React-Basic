import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const initalState={
    loading:true,
    error:'',
    post:{}
};
const reducer =(state,action)=>{
    switch(action.type)
    {

        case 'FETCH_SUCCESS':
            return {
                loading:false,
                error:'',
                post:action.payload
            }
        case 'FETCH_ERROR':
            return{
                loading:false,
                error:'Something Went Wrong!!!!!',
                post:{}

            }
        default: return state    
    }
}

function DataFetchingReducerTwo() {
    const [state,dispatch]=useReducer(reducer,initalState);

       useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/10').then((res)=>{
           dispatch({type:'FETCH_SUCCESS',payload:res.data});
        }).catch(err=>{
          dispatch({type:'FETCH_ERROR'});
        })
    },[])


  return (
    <div>
        {
            state.loading?"LOADING...":state.post.title
        }
        {
            state.error?state.error:null
        }
    </div>
  )
}

export default DataFetchingReducerTwo