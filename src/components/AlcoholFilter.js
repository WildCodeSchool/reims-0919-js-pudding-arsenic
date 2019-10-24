import React from "react"
import "./AlcoholFilter.css"

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
		if (event.target.className === "sweet") {
			this.setState({taste: "sweet"})
		}
		if (event.target.className === "salty") {
			this.setState({taste: "salty"})
		}
	}

	render() {
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
					<button className="sweet" onClick={this.saltyOrSweet}>
						Sucré
					</button>
					<button className="salty" onClick={this.saltyOrSweet}>
						Salé
					</button>
				</div>
			</div>
		)
	}
}

export default AlcoholFilter
