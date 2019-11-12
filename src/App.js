import React from 'react';
import ShowIngredients from './components/ShowIngredients/ShowIngredients';
import Home from './components/Home';
import CocktailFilters from './components/CocktailFilters';
import PizzaFilters from './components/PizzaFilters';
import ListOfFood from './components/ListOfFood';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {useHistory} from 'react-router-dom';
import PresOfFood from './components/PresOfFood'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/CocktailFilters" exact component={CocktailFilters} />
          <Route path="/pizzaFilters" exact component={PizzaFilters} />
          <Route path="/ShowIngredients" exact component={PresOfFood} />
          {/* <Route path="/Showingredients" component={ShowIngredients}/> */}
         <header></header>
        </Router>
      </div>
    )
  }  
}


export default App;

