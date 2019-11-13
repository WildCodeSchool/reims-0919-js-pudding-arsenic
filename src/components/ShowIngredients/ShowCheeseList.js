import React from 'react'
import ShowCheese from './ShowCheese'
import axios from 'axios'

class ShowCheeseList extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			numberOfIngredients : this.randomIngredientNumber(),
			products : []
		}
	}
	componentDidMount () {
		this.getCheese()
	}
	randomIngredientNumber() {
		let numbers = [3, 4, 5, 6, 7]
		let idNumbers = Math.floor(Math.random() * 1)
		return numbers[idNumbers]
	}
	
	deleteCard(image_front_url) {
		console.log(image_front_url)
		const newCards=this.state.products.filter(product=>
			product.image_front_url!==image_front_url)
			this.setState({products:newCards})
  }
	getCheese () {		
			const randomNumber = Math.floor(Math.random() * 20)
			const url = `https://fr.openfoodfacts.org/cgi/search.pl?search_terms=fromage+rap%C3%A9&page_size=20&action=process&json=1`
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
								manufacturing_places: data.products[randomNumber].manufacturing_places,
								code_ID: data.products[randomNumber].code,
								ingredients_text: data.products[randomNumber].ingredients_text,}
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
					.map ((product, i) => <ShowCheese
						image_front_url={this.state.products[i].image_front_url}
						generic_name_fr={this.state.products[i].generic_name_fr}
						manufacturing_places={this.state.products[i].manufacturing_places}
						code_ID={this.state.products[i].code}
						ingredients_text={this.state.products[i].ingredients_text}
            			deleteClickHandler = {this.deleteCard.bind(this,product.image_front_url)}
						/>						
					)}
			</div>
    	)
	}            
}

export default ShowCheeseList
