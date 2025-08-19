
const redux=require('redux');
const createStore=redux.createStore;
const produce=require('immer').produce;

const initialState={
    name:'ABC',
    address:{
        street:'120 def',
        city:'XYZ',
        state:'lorem'
    },
}

const STREET_UPDATED='STREET_UPDATED'

const updateStreet=(street)=>{
    return{
        type:STREET_UPDATED,
        payload:street,
    }
}

const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street:action.payload,
            //     },
            // }
            return  produce(state,(draft)=>{
                draft.address.street=action.payload
            })

        default:
            return state    
    }

}

const store=createStore(reducer);
console.log("Initital  state" ,store.getState());
const unsubscribe=store.subscribe(()=>{
    console.log("Updated state" ,store.getState());
})



store.dispatch(updateStreet('148 ghi'));


unsubscribe();
