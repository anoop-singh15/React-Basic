import {createSlice} from '@reduxjs/toolkit';
import {ordered as cakeOrdered} from '../cake/cakeSlice';

import type { PayloadAction } from '@reduxjs/toolkit';

type InitialState={
    numOfIceCream:number
}

const initialState:InitialState={
    numOfIceCream:20,
    
}

const iceCreamSlice=createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfIceCream--
        },
        restocked:(state,action:PayloadAction<number | undefined>)=>{
           state.numOfIceCream+=(action.payload??1)
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(cakeOrdered,(state)=>{
            state.numOfIceCream--
        })
    }
})

export default iceCreamSlice.reducer;
export const {ordered,restocked}=iceCreamSlice.actions;


