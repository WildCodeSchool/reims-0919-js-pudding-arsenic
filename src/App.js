import React from 'react';
import Home from './components/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PresOfFoodForPizza from './components/PresOfFoodForPizza'
import PresOfFood from './components/PresOfFood'



class App extends React.Component {
  deleteContact = () => {
    console.log(123);
  };

  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/ShowIngredients" exact component={PresOfFood}
            deleteClickhandler={this.deleteContact} />
          <Route path="/Showpizza" exact component={PresOfFoodForPizza} />
          <header></header>
        </Router>
      </div>
    );
  }
}

export default App;
