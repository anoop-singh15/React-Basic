
import './App.css';
import React,{useReducer,useCallback} from 'react';
import HookCounter from './components/HookCounter';


import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';

import EffectCounterOne from './components/EffectCounterOne';
import ClassMouse from './components/ClassMouse';

import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import ReducerCounterOne from './components/ReducerCounterOne';
import ReducerCounterTwo from './components/ReducerCounterTwo';
import ReducerCounterThree from './components/ReducerCounterThree';
import ReducerComponentA from './components/ReducerComponentA';
import ReducerComponentB from './components/ReducerComponentB';
import ReducerComponentC from './components/ReducerComponentC';


import DataFetchingReducerOne from './components/DataFetchingReducerOne';
import DataFetchingReducerTwo from './components/DataFetchingReducerTwo';
import ParentComponent from './components/ParentComponent';

import MemoHookCounter from './components/MemoHookCounter';
import FocusInput from './components/FocusInput';

import RefClassTimer from './components/RefClassTimer';
import RefHookTimer from './components/RefHookTimer';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';

import CustomHookCounterOne from './components/CustomHookCounterOne';
import CustomHookCounterTwo from './components/CustomHookCounterTwo';

import CustomHookUserForm from './components/CustomHookUserForm';


export const UserContext = React.createContext();
export const ChannelContext = React.createContext();



export const countContext=React.createContext();


const initalState=0;
const reducer=(currState,action)=>{
    switch(action){
        case 'increment':
            return currState+1
        case 'decrement':
            return currState-1
        case 'reset':
            return initalState
        defaut:
        return currState      
    }

}

function App() {
   const [count,dispatch]= useReducer(reducer,initalState)
  return (
    <div className="App">
      {/* Tut 2 useState hook */}
      {/* <HookCounter></HookCounter> */}

      {/* Tut 3 useState with previos State */}
      {/* <HookCounterTwo></HookCounterTwo> */}


      {/* TUT 4 useState with objects */}
      {/* <HookCounterThree></HookCounterThree> */}

      {/* TUT 5 useState with Array */}
      {/* <HookCounterFour></HookCounterFour> */}

      {/* TUT 6 useEffect Hook */}

      {/* TUT 7 useEffect hook after Render */}
      {/* <EffectCounterOne></EffectCounterOne> */}


      {/* TUT 8 Conditionally run effects */}
      {/* <EffectCounterOne></EffectCounterOne> */}

      {/* TUT 9 Run effect only once */}
      {/* <ClassMouse></ClassMouse> */}
      {/* <HookMouse></HookMouse> */}


      {/* TUT 10 useEffect with cleanup or useEffects component did unmount functionality */}
      {/* <MouseContainer></MouseContainer> */}

      {/* TUT 11 useEffect with incorrect dependency */}
      {/* <IntervalHookCounter></IntervalHookCounter> */}

      {/* Tut 12-13-14 fetching data with useEffect */}
      {/* <DataFetching></DataFetching> */}

      {/* TUT 15-16 useContext 1-2 */}
      {/* <UserContext.Provider value={'Component'}>
        <ChannelContext.Provider value={"CW"}>

          <ComponentC />

        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* TUT 17 useContext Hook 3  */}
       {/* <UserContext.Provider value={'Component'}>
        <ChannelContext.Provider value={"CW"}>

          <ComponentC />

        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* TUT 19 useReducer [simple state and action] */}
      {/* <ReducerCounterOne></ReducerCounterOne> */}

      {/* TUT 20 useReducer [ complex state & action ] */}
        {/* <ReducerCounterTwo></ReducerCounterTwo> */}

        {/* TUT 21 Multiple useReducers */}
        {/* <ReducerCounterThree></ReducerCounterThree> */}

        {/* TUT 22 useReducer with useContext */}
        {/* <countContext.Provider value={{countState:count,countDispatch:dispatch}}>
        
          count -{count}
          <ReducerComponentA></ReducerComponentA>
          <ReducerComponentB></ReducerComponentB>
          <ReducerComponentC></ReducerComponentC>
        
        </countContext.Provider> */}

          {/* Tut 23 Fetching data with useReducer part 1 */}
          {/* <DataFetchingReducerOne></DataFetchingReducerOne> */}

          {/* Tut 24 Fetching Data with useReducer 2 */}
          {/* <DataFetchingReducerTwo></DataFetchingReducerTwo> */}

          {/* TUT 25 useState vs useReducer */}

          {/* TUT 26 useCallback Hook */}
          {/* <ParentComponent></ParentComponent> */}

          {/* TUT 27 useMemo hook */}
          <MemoHookCounter></MemoHookCounter>

          {/* TUT 28 useRef part 1 */}
          {/* <FocusInput></FocusInput> */}

          {/* TUT 29 useRef hook part 2 */}
          {/* <RefClassTimer></RefClassTimer> */}
          {/* <RefHookTimer></RefHookTimer> */}


          {/* TUT 30-31 Custom Hooks */}
          {/* <DocTitleOne></DocTitleOne>
          <DocTitleTwo></DocTitleTwo> */}


          {/* TUT 32 useCounter custom hook */}
          {/* <CustomHookCounterOne></CustomHookCounterOne>
          <CustomHookCounterTwo/> */}

          {/* TUT 33 useInput custom hook */}
           {/* <CustomHookUserForm></CustomHookUserForm>  */}

          

    </div>
  );
}

export default App;
