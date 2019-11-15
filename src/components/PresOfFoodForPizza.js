import React from "react"
import "./ShowIngredients/ShowIngredients.css"
import Title from './Title'
//import ImageBand from './ImageBand'
import ShowPateList from "./ShowIngredients/ShowPateList"
import ShowCheeseList from "./ShowIngredients/ShowCheeseList"
import ShowIngredientListPizza from "./ShowIngredients/ShowIngredientListPizza"
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
			{/* <ImageBand /> */}
            <h2>Votre recette de la mort :</h2>
            <ShowPateList />
            <ShowCheeseList />
            <ShowIngredientListPizza />
            <div className="orga">
                <div className="align">
                    <p>Tu as changé d'avis, pour retourner sur l'accueil, clique sur la flèche : </p>
                    <button className="buttonBack" type="button" onClick={event=>history.push("/")}>
                        <figure>
                            <img className="goBack" src="https://zupimages.net/up/19/46/hprl.jpg" alt="Flèche"></img>
                        </figure>
                    </button>
                </div>
                <div className="align">
                    <p>Ca ne te plait pas ! Tu veux relancer la roulette, clique sur le bouton : </p>
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