// import logo from './logo.svg';
import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom'
import OrderSummary from './components/OrderSummary';
import Home from './components/Home';
// import About from './components/About';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
import Profile from './components/Profile';
import { AuthProvider } from './components/Auth';
import Login from './components/Login';

import RequireAuth from './components/RequireAuth';

const LazyAbout = React.lazy(() => import('./components/About'))

function App() {
  return (
    <AuthProvider>


      {/* TUT 3 Configuring Routes */}
      {/* <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='about' element={<About/>}></Route>
        </Routes> */}


      {/* TUT 4 Links */}
      {/* <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
      </Routes> */}


      {/* TUT 5  Active Links */}
      {/* <Navbar></Navbar> */}
      {/* <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
      </Routes> */}


      {/* TUT 6-7 Navigating Programmaticaly and no match route */}
      {/* <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='order-summary' element={<OrderSummary />}></Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Routes> */}

      {/* TUT 8 Nested Routes */}

      {/* <Navbar></Navbar> */}
      {/* <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>

        <Route path='products' element={<Products />}>
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>

        <Route path='order-summary' element={<OrderSummary />}></Route>

        <Route path='*' element={<NoMatch />}></Route>
      </Routes> */}


      {/* TUT 9 Index Route */}

      {/* <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>

        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts/>}/>
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>

        <Route path='order-summary' element={<OrderSummary />}></Route>

        <Route path='*' element={<NoMatch />}></Route>
      </Routes> */}

      {/* TUT 10 Dynamic Route */}
      {/* <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>

        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts/>}/>
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>

        <Route path='order-summary' element={<OrderSummary />}></Route>
        <Route path='users' element={<Users/>}>
          <Route path=':userId' element={<UserDetails/>}/>
          <Route path='admin' element={<Admin/>}/>
        </Route>

        <Route path='*' element={<NoMatch />}></Route>
      </Routes> */}


      {/* #### TUT 11 URL Params */}

      {/* <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>

        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts/>}/>
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>

        <Route path='order-summary' element={<OrderSummary />}></Route>
        <Route path='users' element={<Users/>}>
          <Route path=':userId' element={<UserDetails/>}/>
          <Route path='admin' element={<Admin/>}/>
        </Route>

        <Route path='*' element={<NoMatch />}></Route>
      </Routes> */}


      {/* #### TUT 12 Search Params  */}
      {/* <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>

        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts/>}/>
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>
         
        <Route path='order-summary' element={<OrderSummary />}></Route>
        <Route path='users' element={<Users/>}>
                //DYNAMIC ROUTE 
          <Route path=':userId' element={<UserDetails/>}/>
          <Route path='admin' element={<Admin/>}/>
        </Route>

        <Route path='*' element={<NoMatch />}></Route>
      </Routes> */}

      {/* #### TUT 13 Relative links */}
      {/* 
       <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>

        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts/>}/>
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>
         
        <Route path='order-summary' element={<OrderSummary />}></Route>
        <Route path='users' element={<Users/>}>
              
          <Route path=':userId' element={<UserDetails/>}/>
          <Route path='admin' element={<Admin/>}/>
        </Route>

        <Route path='*' element={<NoMatch />}></Route>
      </Routes> */}


      {/* #### TUT 14 Lazy Loading  bulking about page*/}

      {/* <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<React.Suspense fallback='Loading...'><LazyAbout/></React.Suspense>} />

        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>

        <Route path='order-summary' element={<OrderSummary />}></Route>
        <Route path='users' element={<Users />}>

          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>

        <Route path='*' element={<NoMatch />}></Route>
      </Routes> */}


      {/* ### TUT 15 Authentication */}

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<React.Suspense fallback='Loading...'><LazyAbout /></React.Suspense>} />

        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>

        <Route path='order-summary' element={<OrderSummary />}></Route>
        <Route path='users' element={<Users />}>

          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>


        <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />


        <Route path='login' element={<Login />} />

        <Route path='*' element={<NoMatch />}></Route>
      </Routes>






    </AuthProvider>
  );
}

export default App;
