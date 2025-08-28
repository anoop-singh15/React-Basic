
import './App.css';
// import Greet from './components/Greet';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Status } from './components/Status';

// import Heading from './components/Heading';
// import Oscar from './components/Oscar';

// import Button from './components/Button';
// import Input from './components/Input';

// import User from './components/state/User';

// import { LoggedIn } from './components/state/LoggedIn';

// import Container from './components/Container';

// import Counter from './components/state/Counter';

// import { ThemeContextProvider } from '../src/components/context/ThemeContext'
// import {Box} from '../src/components/context/Box'

// import { UserContextProvider } from './components/context/UserContext';
// import User from './components/context/User';

// import DomRef from './components/ref/DomRef';
// import MutableRef from './components/ref/MutableRef';

// import Counter from './components/class/Counter';
// import { Private } from './components/auth/Private';
// import Profile from './components/auth/Profile';

// import { List } from './components/generics/List';
// import { RandomNumber } from './components/restriction/RandomNumber';

// import { Toast } from './components/templateliterals/Toast';

// import {CustomButton} from './components/html/Button'
// import { CustomInput } from './components/html/Input';
import  {CustomComponent} from './components/html/CustomComponent';
import { Text } from './components/polymorphic/Text';

function App() {

  const personName = {
    first: 'ABC',
    last: "DEF",
  }

  const nameList = [
    {
      first: 'HC',
      last: '%%%%%%',
    },
    {
      first: '$',
      last: '$$$$$$',
    },
    {
      first: '#',
      last: '######',
    },
  ]


  return (
    <div className="App">
      {/* <Greet name='Earth' messageCount={19} isLoggedIn={false}></Greet>
     <Person name={personName}></Person>
     <PersonList names={nameList}></PersonList> */}

      {/* Tut 5 Advanced Props */}
      {/* <Status status='loading'></Status>
      <Heading>PlaceHolder Text</Heading>
      <Oscar>
        <Heading>Oscar Goes to ......!</Heading>
      </Oscar>
      <Greet name='Earth'  isLoggedIn={true}></Greet> */}


      {/* ##### TUT 6 Event Props */}
      {/* <Button handleClick={(event,id)=>{
          console.log("Button Clicked",event,id)
        }}></Button>

        <Input value="" handleChange={(event)=>console.log(event)}></Input> */}


      {/* #### TUT 7  Style Props*/}
      {/* <Container styles={{border:'1px solid red',padding:'1rem'}}></Container> */}



      {/* TUT 9 useState Hook */}
      {/* <LoggedIn></LoggedIn> */}


      {/* TUT 10 useState future value value */}
      {/* <User></User> */}


      {/* #### TUT 12 useReducer Hook */}
      {/* <Counter></Counter> */}

      {/* #### TUT 14 useContext Hook with type */}
      {/* <ThemeContextProvider>
            <Box></Box>
          </ThemeContextProvider> */}

      {/* ###### TUT 15 useContext hook Future Value */}
      {/* <UserContextProvider>
            <User></User>
          </UserContextProvider> */}

      {/* TUT 16 useRef Hook */}
      {/* <DomRef></DomRef> */}
      {/* <MutableRef></MutableRef> */}

      {/*##### TUT 17 Class Component */}
        {/* <Counter message='Class component counter'></Counter> */}

        {/*######### TUT 18 Component Prop*/}
        {/* <Private isLoggedIn={true} component={Profile}></Private> */}

        {/*#### TUT 19 Generic Props*/}
        {/* <List items={['batman','superman','flash']} onClick={(item)=>console.log(item)}/>
        <List items={[1,2,3]} onClick={(item)=>console.log(item)}/> */}
        {/* <List items={[
          {
            id:1,
            first:'bat',
            last:'man',
          },

          {
            id:2,
            first:'flash',
            last:'cw'
          },

        ]} onClick={(item)=>console.log(item)}/> */}

        {/* ####TUT 20 Restricting Props */}
        {/* <RandomNumber value={10}  isNegative ></RandomNumber> */}
        

          {/*## TUT 21 Template literal and exclude */}
          {/* <Toast position='center'></Toast> */}

          {/* ###TUT 22 Wrapping HTML ELEMENTS */}
          {/* <CustomButton variant='primary' onClick={()=>console.log("Clicked")}>Primary Button</CustomButton>

          <CustomInput value='passed'></CustomInput> */}

          {/* ## TUT 23 Extracting Props */}
          {/* <CustomComponent name='hello' isLoggedIn={true}></CustomComponent> */}

          {/* TUT 24 Polymorphic Components */}
          <Text as='h1' size='lg' >Heading</Text>
          <Text as="p" size='md' >Paragraph</Text>
          <Text as="label" size='sm'  color='secondary'>Label</Text>



    </div>
  );
}

export default App;
