// console.log('from index.js');

// Random number 
// console.log(Math.floor(Math.random()*100)+1);


const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators;
const combineReducers=redux.combineReducers;
const applyMiddleware=redux.applyMiddleware;

// ##################### TUT 14 MiddleWare 
const reduxLogger=require('redux-logger');
const logger=reduxLogger.createLogger();




// #### TUT 5 ACTIONS

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

// ### TUT !11 action creators
function orderIceCream() {
    return {
        type: ICECREAM_ORDERED,
        payload: 1
    }
}
// ### TUT !11
function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

// ##### TUT 6 REDUCERS

// (prevState,action)=>newState
// const initialState = {
//     numOfCakes:10,
//     numOfIceCream:20

// }

// const reducer=(state=initialState,action)=>{
//     switch(action.type)
//     {
//         case CAKE_ORDERED:
//             return {
//                 ...state,
//                 numOfCakes:state.numOfCakes-action.payload
//             }
//         case CAKE_RESTOCKED:
//             return{
//                 ...state,
//                 numOfCakes:state.numOfCakes+action.payload

//             }    
//             // TUT !11
//         case ICECREAM_ORDERED:
//             return {
//                 ...state,
//                 numOfIceCream:state.numOfIceCream-action.payload
//             }
//         case ICECREAM_RESTOCKED:
//             return{
//                 ...state,
//                 numOfIceCream:state.numOfIceCream+action.payload

//             }    
//         default:
//             return state   
//     }
// }








// TUT !11 splitting reducer for cake and icecream
const inititalCakeState = {
    numOfCakes: 10
}
const inititalIceCreamState = {
    numOfIceCream: 20
}

const cakeReducer = (state = inititalCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload

            }

        default:
            return state
    }
}
const iceCreamReducer = (state = inititalIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - action.payload
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream + action.payload

            }
        
        case CAKE_ORDERED:
            return{
                ...state,
                numOfIceCream:state.numOfIceCream-1,
            }

        default:
            return state
    }
}


// #### TUT 7 Store

// const store = createStore(reducer);


    const rootReducer=combineReducers({
        cake:cakeReducer,
        iceCream:iceCreamReducer
    })

// const store=createStore(rootReducer,applyMiddleware(logger));
const store=createStore(rootReducer);


console.log('initial State', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("Updated State", store.getState());

})

// ############# TUT 14 Middleware logger will handle clg
// const unsubscribe = store.subscribe(() => {})

//  store.dispatch(orderCake());
//  store.dispatch(orderCake());
//  store.dispatch(orderCake());
//  store.dispatch(orderCake());
//  store.dispatch(orderCake());
//  store.dispatch(restockCake(orderCake().payload));
//  store.dispatch(restockCake(orderCake().payload));
//  store.dispatch(restockCake(orderCake().payload));
//  store.dispatch(restockCake(orderCake().payload));
//  store.dispatch(restockCake(orderCake().payload));


// ##### TUT 9 bindActionCreators
const actions = bindActionCreators({ orderCake, restockCake,orderIceCream,restockIceCream }, store.dispatch);

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);



// TUT 11 ice cream ordered and restocked
console.log("####################")
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);





unsubscribe();
