// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import CakeView from './features/cake/CakeView';
import UserView from './features/user/UserView';
import IceCreamView from './features/icecream/IceCreamView';


function App() {
  return (
   
      <div >
        {/* TUT 25 React project setup */}
          <CakeView/>
          <IceCreamView/>
          <UserView/>

        {/* TUT 26 Provider */}
      </div>

    
  );
}

export default App;
