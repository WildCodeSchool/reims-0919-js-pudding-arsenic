import React from "react"
import "./ShowIngredients.css"

<<<<<<< HEAD
function refreshPage(){ 
	window.location.reload(); 
  }

class ShowIngredients extends React.Component {
	render() {
		return (
			<div>
			<button type="button" onClick={ refreshPage }> <span>Reset all</span> </button>
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

			</div>
		)
	}		
=======
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
>>>>>>> dev
}	


export default ShowIngredients
