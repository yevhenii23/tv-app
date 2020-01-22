import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import About from './components/About/About';
import MyList from './components/MyList/MyList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' component={Header}/>
        <Route path='/' component={MovieList} exact/>
        <Route path ='/about' component={About} exact/>
        <Route path='/mylist' component={MyList}/>
      </div>
    </Router>
  );
}

export default App;
