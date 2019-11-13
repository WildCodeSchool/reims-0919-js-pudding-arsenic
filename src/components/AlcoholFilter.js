import React from "react"
import "./AlcoholFilter.css"
import CocktailFilters from './CocktailFilters';


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
		//
			return (
				<div className="AlcoholFilter">
					<p>Entrez une fourchette entre 0 et 100 dans les champs ci-dessous</p>
					<div className="alcoholFilterEntry">
						<input
							className="numberField"
							type="number"
							name="alcoholMinimum"
							min="0"
							max="100"
							placeholder="0"
							value={this.state.minimumValue}
							onChange={this.handleChangeMinimum}
						/>
						<input
							className="numberField"
							type="number"
							name="alcoholMaximum"
							min="0"
							max="100"
							placeholder="100"
							value={this.state.maximumValue}
							onChange={this.handleChangeMaximum}
						/>
					</div>
					<div className="sweetAndSaltyButtons">
						<button className="Sucré" onClick={this.saltyOrSweet}>
							Sucré
						</button>
						<button className="Salé" onClick={this.saltyOrSweet}>
							Salé
						</button>
					</div>
					<p>
						Vous avez choisi:
						<br />
						{this.state.taste}
					</p>
					
				</div>
			)
		}
}

export default AlcoholFilter
