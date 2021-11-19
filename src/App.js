import React from 'react';
import LogIn from './Components/LogIn';
import NavBar from './Components/NavBar';
import NewUser from './Components/NewUser'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <NewUser />
     <div><LogIn/></div>
    </div>
  );
}

export default App;
