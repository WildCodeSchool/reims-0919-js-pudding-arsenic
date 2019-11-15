import React from "react"
import "./ShowIngredients/ShowIngredients.css"
import Title from './Title'
import ImageBand from './ImageBand'
import ShowIngredientList from "./ShowIngredients/ShowIngredientList"
import './PresOfFood.css'
import {useHistory} from 'react-router-dom';


export default PresOfFood
function refreshpage(){
    window.location.reload()
}

function PresOfFood (){
    let history=useHistory()
    return(
        <div className="PresOfFood">
            <Title />
			<ImageBand />
            <h2>Votre recette de la mort :</h2>
            <ShowIngredientList />
            <div className="orga">
                <div className="align">
                    <p>Tu as changé d'avis, ok'', pour retourner sur la page de filtre, clique sur la flèche : </p>
                    <button className="buttonBack" type="button" onClick={event=>history.push("/")}>
                        <figure>
                            <img className="goBack" src="https://zupimages.net/up/19/46/hprl.jpg" alt="Flèche"></img>
                        </figure>
                    </button>
                </div>
                <div className="align">
                    <p>Ca ne te plait pas notre recette, tu veux relancer la roulette, clique sur le bouton : </p>
                    <button className="buttonRefresh" type="button" onClick={refreshpage}>
                        <figure>
                            <img className="goRefresh" src="https://zupimages.net/up/19/46/swth.jpg" alt="Retour"></img>
                        </figure>
                    </button>
                </div>
            </div>
        </div>
    )
}