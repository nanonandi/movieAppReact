import React from 'react';
import './App.css';
import MovieList from './MovieList';

function App() {
  return (
    <div className="App">
      <header className="header">Movies of 2018 (React)</header>
      <MovieList />
    </div>
  );
}

export default App;
