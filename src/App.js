import React from 'react';
import './App.css';
import ShowIngredients from './components/ShowIngredients/ShowIngredients';

const product = {
    "image_front_url": "https://static.openfoodfacts.org/images/products/400/263/102/4222/front_fr.8.400.jpg",
    "generic_name_fr": "Bière Blonde",
    "nutriments": {"alcohol": 5},

    "manufacturing_places": "Allemagne"
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  randomIngredientNumber() {
    let numbers = [3, 4, 5, 6, 7]
    let idNumbers = (Math.floor(Math.random() * 5))
    return numbers[idNumbers]
  }
  render() {
    return (
      <div>
        <header>
        </header> 
        <div>
          <ShowIngredients {...product}></ShowIngredients>
        </div>
      </div>
    )
  }  
}


export default App;
