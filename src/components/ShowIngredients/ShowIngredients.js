import React from "react"
import "./ShowIngredients.css"

function ShowIngredients() {
	return (
		<div className="ingredientCard">
			<img
				className="productImage"
				src={this.props.image_front_url}
				alt={this.props.generic_name_fr}
			/>
			<div className="productInfos">
				<p className="productName">{this.props.generic_name_fr}</p>
				<p className="productOrigin">{this.props.manufacturing_places}</p>
				<p className="nutriments">{this.props.nutriments.alcohol}° alcool</p>
			</div>
		</div>
	)
}

export default ShowIngredients
