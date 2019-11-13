import React from 'react'
import './Modal.css'
import ShowIngredients from './ShowIngredients/ShowIngredients'



const Modal= ({revele, cache, image}) => revele ?(
    <React.Fragment>
        <div className="overlay">
            <div className="wrapper">
                <div className="Modale">
                    <button type="button" className="closeT" onClick={cache} style={{height:'30px', width:'30px'}}>
                        <span>&times;</span>
                    </button>
                    <div className="ingredientCard">
                        <p className="productOrigin">Va chercher ton bonheur sur : https://fr.openfoodfacts.org/data</p>
                        <img className="imgOpenFoodFacts" src={image} alt="imgOpenFoodFacts"></img>
                        <img className="imgingredientsUrl" src={image_ingredients_url} alt="imgingredientsUrl"></img>
                    </div>
                </div> 
            </div>
        </div>
    </React.Fragment>
):null

export default Modal