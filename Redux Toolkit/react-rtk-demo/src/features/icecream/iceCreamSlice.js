import {createSlice} from '@reduxjs/toolkit';
import {ordered as cakeOrdered} from '../cake/cakeSlice';

const initialState={
    numOfIceCream:20,
    
}

const iceCreamSlice=createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            state.numOfIceCream--
        },
        restocked:(state,action)=>{
           state.numOfIceCream+=(action.payload??1)
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(cakeOrdered,(state,action)=>{
            state.numOfIceCream--
        })
    }
})

export default iceCreamSlice.reducer;
export const {ordered,restocked}=iceCreamSlice.actions;


