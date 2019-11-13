import React from 'react'
import './Modal.css'
import ShowIngredients from './ShowIngredients/ShowIngredients'



const Modal= ({revele, cache, code, ingredients_text, nom}) => revele ?(
    <React.Fragment>
        <div className="overlay">
            <div className="wrapper">
                <div className="Modale">
                    <button type="button" className="closeT" onClick={cache} style={{height:'30px', width:'30px'}}>
                        <span>&times;</span>
                    </button>
                    <div className="ingredientCard">
                        <p className="productOrigin">Va chercher ton bonheur sur : https://fr.openfoodfacts.org/data</p>
                        <img className="imgOpenFoodFacts" src={'https://static.openfoodfacts.org/images/misc/openfoodfacts-logo-fr-178x150.png'} alt="imgOpenFoodFacts"></img>
                        <p className="productOrigin">Nom : {nom}</p>
                        <p className="productOrigin">Code : {code}</p>
                        <p className="productOrigin">Ingrédients : {ingredients_text}</p>
                    </div>
                </div> 
            </div>
        </div>
    </React.Fragment>
):null

export default Modal