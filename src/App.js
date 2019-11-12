import React from "react"
import "./App.css"
import Home from "./components/Home"
import CocktailFilters from "./components/CocktailFilters"
import PizzaFilters from "./components/PizzaFilters"
import ShowIngredientList from "./components/ShowIngredients/ShowIngredientList"


function refreshPage(){ 
	window.location.reload(); 
  }

function App () {
	return (
		<div>
			<header></header>
			<Home />
			<CocktailFilters />
			<PizzaFilters />
			<div>
				<h1>Notre suggestion ...</h1>
				<button type="button" onClick={ refreshPage }> <span>Reset all</span> </button>
			<ShowIngredientList />				
			</div>
		</div>
	)
}

export default App
