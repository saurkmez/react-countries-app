import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'

import CountryList from './components/CountryList';
import Country from './components/Country';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className="container mt-2"></div>
      <Switch>
          
        <Route component={CountryList} path='/' exact/>
        <Route component={Country} path='/:name' ></Route>
    
      </Switch>
      
      </BrowserRouter>
     

    </div>
  );
}

export default App;

