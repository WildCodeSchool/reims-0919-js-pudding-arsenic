import React from "react"
import "./ShowIngredients/ShowIngredients.css"
import Title from './Title'
import ImageBand from './ImageBand'
import './PresOfFood.css'
import AlcoholFilter from "./AlcoholFilter"
import {useHistory} from 'react-router-dom';


export default PresOfFilterForCocktail

function PresOfFilterForCocktail (){
    let history=useHistory()
    return(
        <div className="PresOfFood">
            <Title />
			<ImageBand />
            <AlcoholFilter />
            <button className="buttonBack" type="button" onClick={event=>history.push("/")}>
                <figure>
                    <img className="goBack" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb6CoZQzxU75Lv2WSpgSLTCCosIh9d2h6Psbh8j4w0TGDklMjkAg&s" alt="Flèche"></img>
                </figure>
            </button>
            <button className="buttonGO" type="button" onClick={event=>history.push("/ShowIngredients")}>GO</button>
        </div>
    )
}