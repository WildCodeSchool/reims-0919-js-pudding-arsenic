import React from "react"
import "./App.css"
import Home from "./components/Home"
import CocktailFilters from "./components/CocktailFilters"
import PizzaFilters from "./components/PizzaFilters"
import ShowIngredientList from "./components/ShowIngredients/ShowIngredientList"


function App () {
	return (
		<div>
			<header></header>
			<Home />
			<CocktailFilters />
			<PizzaFilters />
			<ShowIngredientList />				
		</div>
	)
}

export default App
