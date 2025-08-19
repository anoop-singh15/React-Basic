import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type InitialState={
    numOfCakes:number
}


const initialState:InitialState={
    numOfCakes:10,
   
}

const cakeSlice=createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfCakes--
        },
        restocked:(state,action:PayloadAction<number | undefined>)=>{
            state.numOfCakes+=action.payload??1
        }
    },
    

});

export default cakeSlice.reducer;
export const{ordered,restocked}=cakeSlice.actions;
