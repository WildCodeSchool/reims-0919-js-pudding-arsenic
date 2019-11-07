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
            <button className="buttonGO" type="button" onClick={event=>history.push("/ShowIngredients")}>GO</button>
        </div>
    )
}