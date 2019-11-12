import React from "react"
import "./ShowIngredients.css"

function ShowIngredients ({image_front_url, generic_name_fr, manufacturing_places}) {
	return (
		<div className="ingredientCard">
			<img
				className="productImage"
				src={image_front_url}
				alt={generic_name_fr}
			/>
			<div className="productInfos">
				<p className="productName">{generic_name_fr}</p>
				<p className="productOrigin">{manufacturing_places}</p>
			</div>
		</div>
	)			
}	


export default ShowIngredients
