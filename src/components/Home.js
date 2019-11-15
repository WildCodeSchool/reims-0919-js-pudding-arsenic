import React from 'react';
import Title from './Title';
import './Home.css';
import {useHistory} from 'react-router-dom';
import ImageBand from './ImageBand';

function Home () {
	let history=useHistory()
		return (
			<div className="Home">
				<div>
					<Title />
					<ImageBand />
					<img className="séparateur" src="https://zupimages.net/up/19/44/l8sr.png" alt="séparateur"></img>
					
				</div>
				
				<div className="affichageBouton">
					<h2>Sélectionner votre poison :</h2>
					<div className="HomeButton">
						<div className="cocktailButton">
							<button className="cocktailButt" type="button" onClick={event=>history.push("/ShowIngredients")}>
							<figure>
								<img
								className="imageCocktail"
								src="https://zupimages.net/up/19/46/yv37.jpg"
								alt="cocktail"
								></img>
							</figure>
							Get a cocktail</button>
							<div className="label">Cocktail</div>
						</div>
						<div className="pizzaButton">
							<button className="pizzaButt" type="button" onClick={event=>history.push("/Showpizza")}>Get a pizza
								<figure>
									<img
									className="imagePizza"
									src="https://zupimages.net/up/19/46/eipz.jpg"
									alt="pizza"
									></img>
								</figure>
							</button>
							<div className="label">Pizza</div>
						</div>
					</div>
					<h3>Cliquer sur l'image pour composer votre recette</h3>
				</div>
				<div className="HomeText">
					<p>
					Vous aimez prendre des risques ? Vous aimez les jeux potentiellement mortels ? 
					Il y a une probabilité d'empoisonnement, c'est votre choix...</p> 
					<p>Que ce soit parce que vous êtes joueur ou pour que vos invités ne reviennent pas,...
					 nous vous proposons un panel de recettes de cocktail et pizza qui,
					  à défaut de ravir vos papilles, vous offrirons de réelles sensations !!!</p>
					<p>On vous attend sur les prochaines pages, on verra qui sera le plus fort ah ... ah ... ah ...
					</p>
				</div>
			</div>
		)	
}

export default Home
