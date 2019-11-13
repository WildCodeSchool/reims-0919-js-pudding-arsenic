import React from "react"
import "./AlcoholFilter.css"
import CocktailFilters from './CocktailFilters';

import SliderAlcohol from './Sliders/SliderAlcohol'

class AlcoholFilter extends React.Component {
	constructor() {
		super()
		this.state = {
			minimumValue: "",
			maximumValue: "",
			taste: "",
		}

		this.handleChangeMinimum = this.handleChangeMinimum.bind(this)
		this.handleChangeMaximum = this.handleChangeMaximum.bind(this)
		this.saltyOrSweet = this.saltyOrSweet.bind(this)
	}

	handleChangeMinimum(event) {
		if (event.target.value < 0 || event.target.value > 100) {
			alert("Entrez une valeur entre 0 et 100")
		} else {
			this.setState({minimumValue: event.target.value})
		}
	}

	handleChangeMaximum(event) {
		if (event.target.value < 0 || event.target.value > 100) {
			alert("Entrez une valeur entre 0 et 100")
		} else {
			this.setState({maximumValue: event.target.value})
		}
	}

	saltyOrSweet(event) {
		if (event.target.className === "Sucré") {
			this.setState({taste: "Sucré"})
		}
		if (event.target.className === "Salé") {
			this.setState({taste: "Salé"})
		}
	}

	render() {
		return (
			<div className="AlcoholFilter">
				<SliderAlcohol />
			</div>
			)
		}
}

export default AlcoholFilter
