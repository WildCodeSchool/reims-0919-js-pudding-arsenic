import React from 'react';
import Home from './components/Home';
import CocktailFilters from './components/CocktailFilters';
import PizzaFilters from './components/PizzaFilters';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import PresOfFood from './components/PresOfFood'


class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/CocktailFilters" exact component={CocktailFilters} />
          <Route path="/pizzaFilters" exact component={PizzaFilters} />
          <Route path="/ShowIngredients" exact component={PresOfFood}
            deleteClickhandler={this.deleteContact} />          
         <header></header>
        </Router>
      </div>
    )
  }  
}


export default App;

