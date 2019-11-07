import React from "react"
import "./ShowIngredients/ShowIngredients.css"
import Title from './Title'
import ImageBand from './ImageBand'
import ShowIngredientList from "./ShowIngredients/ShowIngredientList"
import './PresOfFood.css'
import { FaBeer } from 'react-icons/fa'

export default PresOfFood

function PresOfFood (){
    return(
        <div className="PresOfFood">
            <Title />
			<ImageBand />
            <h2>Votre recette de la mort <FaBeer /></h2>
            <ShowIngredientList />
        </div>
    )
}