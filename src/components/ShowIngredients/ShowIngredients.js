import React from "react"
import "./ShowIngredients.css"

function ShowIngredients(props) {
	return (
		<div className="ingredientCard">
			<img
				className="productImage"
				src={props.products[0].image_front_url}
				alt={props.products[0].generic_name_fr}
			/>
			<div className="productInfos">
				<p className="productName">{props.products[0].generic_name_fr}</p>
				<p className="productOrigin">{props.products[0].manufacturing_places}</p>
			</div>
		</div>
	)
}	


export default ShowIngredients
