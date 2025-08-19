
import './App.css';
import Greet from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {

  const personName={
    first:'ABC',
    last:"DEF",
  }

  const nameList=[
    {
      first:'HC',
      last:'%%%%%%',
    },
    {
      first:'$',
      last:'$$$$$$',
    },
    {
      first:'#',
      last:'######',
    },
  ]


  return (
    <div className="App">
     <Greet name='Earth' messageCount={19} isLoggedIn={false}></Greet>
     <Person name={personName}></Person>
     <PersonList names={nameList}></PersonList>
    </div>
  );
}

export default App;
