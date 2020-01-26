import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import About from './components/About/About';
import MyList from './components/MyList/MyList'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' component={Header}/>
        <Route path='/' component={MovieList} exact/>
        <Route path ='/about/:showId' component={About} exact/>
        <Route path='/mylist' component={MyList} exact/>
      </div>
    </Router>
  );
}

export default App; 
