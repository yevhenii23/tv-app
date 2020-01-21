import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <MovieList></MovieList>
    </div>
  );
}

export default App;
