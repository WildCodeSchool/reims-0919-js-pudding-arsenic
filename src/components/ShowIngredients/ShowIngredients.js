import React from "react"
import "./ShowIngredients.css"
import Modal from "../Modal"


class ShowIngredients extends React.Component{
	constructor(props){
		super(props)
		this.state={
			revele: false,
			cache:true
		}
	this.toggleModal=this.toggleModal.bind(this)
	}


onDeleteClick=()=>{
	this.props.deleteClickHandler()
}

toggleModal() {
	this.setState({
		revele: !this.state.revele,
		cache:!this.state.cache
	})
}

render(){
	return (
		<div className="ingredientCard">
				<button 
					type="button" 
					className="close" 
					style={{height:'30px', width:'30px'}}
					onClick={this.onDeleteClick}>
                    <span>&times;</span>
                </button>
			<img
				className="productImage"
				src={this.props.image_front_url}
				alt={this.props.generic_name_fr}
			/>
				<div className="productInfos">
					<p className="productName">{this.props.generic_name_fr}</p>
					<p className="productOrigin">{this.props.manufacturing_places}</p>
					<button type="button" className="openModal" style={{height:'30px', width:'100px'}} onClick={this.toggleModal}>
                    Plus d'infos ...
                </button>
				</div>
				<Modal
					revele={this.state.revele}
					cache={this.toggleModal}
				/>	

		</div>
	)			
}}


export default ShowIngredients
