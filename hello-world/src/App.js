import logo from './logo.svg';
import './App.css';
// import MyComponent1 from './components/Greet';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'

import Form from './components/Form';

import Lifecycle from './components/Lifecycle';
import FragmentDemo from './components/FragmentDemo';

import Table from './components/Table';
import PureCom from './components/PureCom';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';

import FocusInput from './components/FocusInput';

import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';

import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';


import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterRenderProps from './components/CounterRenderProps';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {

  return (
    <div className="App">
      {/* <Greet name='ABC' Age='18'>
     
    </Greet> */}
      {/* <Greet name='ABC 1' Age='23'>
     <button>Action</button>
    </Greet>
    <Greet name='ABC 2' Age='25'>
      
    </Greet> */}

      {/* <Welcome name="ABC" age='24'/>
    <Welcome/>
    <Welcome/> */}

      {/* <Hello/> */}


      {/* <Message/> */}

      {/* <Counter/> */}

      {/* <Welcome name="ABC" age='24'/> */}

      {/* <FunctionClick/> */}

      {/* <ClassClick/> */}

      {/* <EventBind/> */}
      {/* <ParentComponent/> */}

      {/* 16 Conditional Rendering */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList/> */}


      {/* Tutorial 20 Styling */}
      {/* <Stylesheet primary={true}/> */}
      {/* <Inline/> */}
      {/* <h1 className='error'> Error </h1>
    <h1 className={styles.success}>Success</h1> */}

      {/* tutorial 21 */}
      {/* <Form/> */}

      {/* Tutorial 23  Mounting Life Cycle*/}
      {/* Tut 24 */}
      {/* <Lifecycle/> */}

      {/* Tutorial 25 Fragments */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <Table></Table> */}

      {/* Tut 26 Pure Component */}
      {/* <PureCom/> */}
      {/* MEMO Basic */}
      {/* <ParentComp/> */}


      {/* Tut 28 Refs */}
      {/* <RefsDemo/> */}

      {/* Tut 29 Refs with class component */}
      {/* <FocusInput></FocusInput> */}

      {/* Tut 30 Forwarding Refs */}
      {/* <FRParentInput></FRParentInput> */}

      {/* Tut 31 Portals*/}
      {/* <PortalDemo/> */}

      {/* Tut 32 Error Boundary */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="joker" />
      </ErrorBoundary> */}


      {/* Tut 33 Higher Order Component */}
      {/* <ClickCounter name="Hello!!!!!"/>
      <HoverCounter/> */}

      {/*##### Tut 36 Render Props ####*/}

      {/* <ClickCounterTwo></ClickCounterTwo>
      <HoverCounterTwo/>
      <User render={(isLoggedIn)=>isLoggedIn?'User Component':'GUEST FALSE'}/> */}

      {/* Tut 37 Render Props 2 */}
      {/* <CounterRenderProps render={(count,incrementCount)=>(<ClickCounterTwo count={count} incrementCount={incrementCount}/>)}/> */}
      {/* <CounterRenderProps render={(count, incrementCount) => (<HoverCounterTwo count={count} incrementCount={incrementCount} />)} /> */}

      {/* ###2nd method of Render Props */}
      {/* <CounterRenderProps>
        {
          (count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )
        }
      </CounterRenderProps >
      <CounterRenderProps>
        {
          (count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )
        }
      </CounterRenderProps > */}


      {/* TUT 38-40 React Context and need of Context Api */}
       {/* <UserProvider value="HELLO!!!!!!!!!!!!!!!!">
        <ComponentC/>
       </UserProvider> */}

       {/* <UserProvider value="HELLO!!!!!!!!!!!!!!!!"> */}
        {/* <ComponentC /> */}
       {/* </UserProvider> */}

       {/* Context type prop tut 40 */}
         <UserProvider value="HELLO!!!!!!!!!!!!!!!!">
        <ComponentC />
       </UserProvider>



    </div>
  );
}

export default App;
