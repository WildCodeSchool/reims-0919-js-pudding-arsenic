import React from 'react'
import ShowIngredients from './ShowIngredients'
import axios from 'axios'

class ShowIngredientList extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			numberOfIngredients : this.randomIngredientNumber(),
			products : []
		}
	}
	componentDidMount () {
		this.getIngredient()
	}
	randomIngredientNumber() {
		let numbers = [3, 4, 5, 6, 7]
		let idNumbers = Math.floor(Math.random() * 5)
		return numbers[idNumbers]
	}
	getIngredient () {		
		for (let i = 0 ; i < 7 ; i++) {
			const randomNumber = Math.floor(Math.random() * 20)
			const randomPage = Math.floor(Math.random() * 1001)
			const url = `https://world.openfoodfacts.org/cgi/search.pl?page=${randomPage}&page_size=20&action=process&json=1`
			axios
				.get (url)
				.then (response => response.data)
				.then (data => {
					this.setState ((state) => {
						const ingredient = 
							{image_front_url: data.products[randomNumber].image_front_url,
							generic_name_fr: data.products[randomNumber].generic_name_fr,
							manufacturing_places: data.products[randomNumber].manufacturing_places}
						let products = state.products.concat(ingredient)
						return {
							products
						}
					})
				})
		}		
	}
	render() {
		return (
			<div>
				{this.state.products
					.filter((product, index) => index < this.state.numberOfIngredients)
					.map ((product, i) => <ShowIngredients 
						image_front_url={this.state.products[i].image_front_url}
						generic_name_fr={this.state.products[i].generic_name_fr}
						manufacturing_places={this.state.products[i].manufacturing_places}
						/>						
					)}
			</div>
    	)
	}            
}

export default ShowIngredientList
