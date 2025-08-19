const {createSlice}=require('@reduxjs/toolkit');
const {cakeActions}=require('../cake/cakeSlice');

const initialState={
    numOfIceCream:20,
}

const iceCreamSlice=createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfIceCream--
        },
        restocked:(state,action)=>{
           state.numOfIceCream+=action.payload
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(cakeActions.ordered,(state,action)=>{
            state.numOfIceCream--
        })
    }
})

module.exports=iceCreamSlice.reducer;
module.exports.iceCreamActions=iceCreamSlice.actions;


