import React from "react"
import "./PizzaFilters.css"
import AlcoholFilter from "./AlcoholFilter"
import Navbar from "./Navbar"

function PizzaFilters() {
	return (
		<div id="PizzaFilters">
			<h2>page de filtres pour pizza</h2>
			<AlcoholFilter />
			<Navbar />
		</div>
	)
}

export default PizzaFilters
