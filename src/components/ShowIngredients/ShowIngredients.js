import React from "react"
import "./ShowIngredients.css"


class ShowIngredients extends React.Component {

	onDeleteClick=()=>{
		this.props.deleteClickHandler()
	}

	render(){
		return (
			<div className="ingredientCard">
				{/* <i className='fa fa-window-close' style={{cursor:'pointer',float:'right', fontSize:'24px',paddingRight:'0'}}onClick={this.onDeleteClick}></i>
				<i className='fas fa-undo-alt' style={{cursor:'pointer',float:'right', fontSize:'24px',paddingRight:'0'}}></i> */}
				<img
					className="productImage"
					src={this.props.image_front_url}
					alt={this.props.generic_name_fr}
				/>
					<div className="productInfos">
						<p className="productName">{this.props.generic_name_fr}</p>
						<p className="productOrigin">{this.props.manufacturing_places}</p>
						<button type="button" className="openModal" style={{height:'30px', width:'100px'}}>
						Plus d'infos ...
			</button>
					</div>
					<button 
						type="button" 
						className="close" 
						style={{height:'30px', width:'30px'}}
						onClick={this.onDeleteClick}>
						<span>&times;</span>
			</button>
			</div>
		)			
	}}


export default ShowIngredients
