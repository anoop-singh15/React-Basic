// import logo from './logo.svg';
import './App.css';
// import { UseState } from './components/UseState/UseState';
// import { UseReducer } from './components/UseReducer/UseReducer';

// import { ObjectUseState } from './components/Immutable State/ObjectUseState';
// import { ArrayUseState } from './components/Immutable State/ArrayUseState';

// import { Parent } from './components/Parent Child/Parent';
// import { ParentOne } from './components/Optimization/ParentOne';
// import { ChildOne } from './components/Optimization/ChildOne';

// import { GrandParent } from './components/Optimization/GrandParent';
// import { ParentTwo } from './components/Optimization/ParentTwo';

// import { ParentThree } from './components/Incorrect Optimization/ParentThree';
// import {ParentFour} from './components/Incorrect Optimization/ParentFour'
import { ContextParent } from './components/Context/ContextParent';
import { ChildA } from './components/Context/ContextChildren';

function App() {
  return (
    <div className="App">
      {/* <UseState></UseState> */}
      {/* <UseReducer></UseReducer> */}


      {/* TUT 5 State Immutability */}
      {/* <ObjectUseState></ObjectUseState> */}
      {/* <ArrayUseState></ArrayUseState> */}


      {/* TUT 6 Parent Child */}
      {/* <Parent></Parent> */}

      {/* ### TUT 7 Same Element Reference */}
      {/* <ParentOne>
        <ChildOne/>
      </ParentOne> */}
      {/* <GrandParent></GrandParent> */}

      {/* ####TUT 8 React MEMO */}
      {/* <ParentTwo></ParentTwo> */}

      {/* #### TUT 10,11 Incorrect Memo children , Impure Component*/}
      {/* <ParentThree></ParentThree> */}

      {/* TUT 12,13 Incorrect memo with props Reference */}
      {/* <ParentFour></ParentFour> */}
        

        {/*#### TUT 14 Context */}
        <ContextParent>
          <ChildA></ChildA>
        </ContextParent>


    </div>
  );
}

export default App;
