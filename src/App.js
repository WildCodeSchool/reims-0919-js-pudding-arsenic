import React from 'react';
import ShowIngredients from './components/ShowIngredients/ShowIngredients';
import Home from './components/Home';
import CocktailFilters from './components/CocktailFilters';
import ListOfFood from './components/ListOfFood';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PresOfFoodForPizza from './components/PresOfFoodForPizza'
import PresOfFood from './components/PresOfFood'
import PresOfFilterForCocktail from './components/PresOfFilterForCocktail'

// const product = [
//     {"image_front_url": "https://static.openfoodfacts.org/images/products/400/263/102/4222/front_fr.8.400.jpg",
//     "generic_name_fr": "Bière Blonde",
//     "nutriments": {"alcohol": 5},
//     "manufacturing_places": "Allemagne"
//     },
//     {
//       "image_front_url": "https://static.openfoodfacts.org/images/products/325/622/111/4591/front_fr.16.100.jpg",
//       "generic_name_fr": "Vodka 70 cl Poliakov",//"product_name"
//       "nutriments": {"alcohol": 37.55},
//       "manufacturing_places": "Allemagne"   
//     },
//     {
//       "image_front_url": "https://static.openfoodfacts.org/images/products/326/768/135/6827/front_fr.5.400.jpg",
//       "generic_name_fr": "Vin rouge",//"product_name"
//       "nutriments": {"alcohol": 12},
//       "manufacturing_places": "France"   
//     },
//     {
//       "image_front_url": "https://static.openfoodfacts.org/images/products/356/470/001/3342/front_fr.19.400.jpg",
//       "generic_name_fr": "Vinaigre de cidre",//"product_name"
//       "nutriments": {"alcohol": 5},
//       "manufacturing_places": "france"   
//     },
//     {
//       "image_front_url": "https://static.openfoodfacts.org/images/products/350/211/000/9449/front_fr.56.400.jpg",
//       "generic_name_fr": "Pur jus d'orange sans pulpe",//"product_name"
//       "nutriments": {"alcohol": 0},
//       "manufacturing_places": "Australie"   
//     },
//     {
//       "image_front_url": "https://static.openfoodfacts.org/images/products/325/221/039/0014/front_fr.121.400.jpg",
//       "generic_name_fr": "Lait demi-écrémé",//"product_name"
//       "nutriments": {"alcohol": 0},
//       "manufacturing_places": "france"   
//     },
//     {
//       "image_front_url": "https://static.openfoodfacts.org/images/products/315/525/034/9793/front_fr.80.400.jpg",
//       "generic_name_fr": "Crème chantilly ferme et onctueuse",//"product_name"
//       "nutriments": {"alcohol": 0},
//       "manufacturing_places": "France"   
//     },
//     {
//       "image_front_url": "https://static.openfoodfacts.org/images/products/541/022/824/5674/front_fr.4.400.jpg",
//       "generic_name_fr": "Bierre",//"product_name"
//       "nutriments": {"alcohol": 9},
//       "manufacturing_places": "Belgique"   
//     },
//     {
//       "image_front_url": "https://static.openfoodfacts.org/images/products/304/370/010/3715/front_fr.11.400.jpg",
//       "generic_name_fr": "Cordon rouge",//"product_name"
//       "nutriments": {"alcohol": 12},
//       "manufacturing_places": "France"   
//     },
//     {
//       "image_front_url": "https://static.openfoodfacts.org/images/products/356/007/096/2334/front_fr.23.400.jpg",
//       "generic_name_fr": "Miel des terres blanches de Champagne",//"product_name"
//       "nutriments": {"alcohol": 0},
//       "manufacturing_places": "France"   
//     }
//   ] 

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  deleteContact =()=>{
    console.log(123)
  }

  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/CocktailFilters" exact component={PresOfFilterForCocktail} />
          <Route path="/ShowIngredients" exact component={PresOfFood}
            deleteClickhandler={this.deleteContact} />
          <Route path="/Showpizza" exact component={PresOfFoodForPizza} />
         <header></header>
        </Router>
      </div>
    )
  }  
}


export default App;

