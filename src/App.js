import React from 'react';
import Home from './components/Home';
import './App.css';
import CocktailFilters from './components/CocktailFilters';
import PizzaFilters from './components/PizzaFilters';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
          <Home/>
        </div>
    </Router>
  )
}

export default App;
