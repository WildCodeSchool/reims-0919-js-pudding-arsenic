import React from "react"
import "./ShowIngredients.css"

<<<<<<< HEAD

class ShowIngredients extends React.Component{

onDeleteClick=()=>{
	this.props.deleteClickHandler()
}

// onDeleteClick(){
// 	this.setState({

// 	})
// }

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
}	
>>>>>>> dev


export default ShowIngredients
