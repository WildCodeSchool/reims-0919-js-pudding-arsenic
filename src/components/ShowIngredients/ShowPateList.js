import React from 'react'
import ShowPate from './ShowPate'
import axios from 'axios'

class ShowPateList extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			numberOfIngredients : this.randomIngredientNumber(),
			products : []
		}
	}
	componentDidMount () {
		this.getPateAPizza()
	}
	randomIngredientNumber() {
		let numbers = [3, 4, 5, 6, 7]
		let idNumbers = Math.floor(Math.random() * 1)
		return numbers[idNumbers]
	}
	
	deleteCard(image_front_url) {
		const newCards=this.state.products.filter(product=>
			product.image_front_url!==image_front_url)
			this.setState({products:newCards})
  }
	getPateAPizza () {		
			const randomNumber = Math.floor(Math.random() * 20)
			const url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&search_terms=p%C3%A2te%20%C3%A0%20d%C3%A9rouler&page_size=20&action=process&json=1`
			axios
				.get (url)
				.then (response => response.data)
				.then (data => {
					this.setState ((state) => {
						const ingredient = 
							{
								display: true,
								image_front_url: data.products[randomNumber].image_front_url,
								generic_name_fr: data.products[randomNumber].product_name_fr,
								manufacturing_places: data.products[randomNumber].manufacturing_places}
						let products = state.products.concat(ingredient)
						return {
							products
						}
					})
				})
	}

	render() {
		return (
			<div>			
        {this.state.products
					.filter((product, index) => index < this.state.numberOfIngredients)
					.map ((product, i) => <ShowPate
						image_front_url={this.state.products[i].image_front_url}
						generic_name_fr={this.state.products[i].generic_name_fr}
						manufacturing_places={this.state.products[i].manufacturing_places}
            deleteClickHandler = {this.deleteCard.bind(this,product.image_front_url)}
						/>						
					)}
			</div>
    	)
	}            
}

export default ShowPateList
