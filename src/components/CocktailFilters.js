import React from "react"
import "./CocktailFilters.css"
import "./PizzaFilters.css"
import AlcoholFilter from "./AlcoholFilter"

function CocktailFilters() {
	return (
		<div id="CocktailFilters">
			<h2>page de filtres pour cocktail</h2>
			<AlcoholFilter />
		</div>
	)
}

export default CocktailFilters
