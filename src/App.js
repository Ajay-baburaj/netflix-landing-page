import './App.css';
import React from 'react';
import NavBar from './Components/Navbar/NavBar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost /RowPost';
import {originals,action} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title='Netflix Originals' url= {originals}/>
      <RowPost  title='Action' isSmall url ={action}/>

    </div>
  );
}

export default App;
