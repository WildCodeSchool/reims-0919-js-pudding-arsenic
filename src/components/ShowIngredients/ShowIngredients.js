import React from "react"
import "./ShowIngredients.css"

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
					</div>
				</div>
			</div>
		)
	}		
}	


export default ShowIngredients
