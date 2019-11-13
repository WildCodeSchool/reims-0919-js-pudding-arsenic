import React from 'react';
import Title from './Title';
import CocktailFilters from './CocktailFilters';
import PizzaFilters from './PizzaFilters';
import './Home.css';
import {Link}from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import ImageBand from './ImageBand';

function Home () {
	let history=useHistory()
		return (
			<div className="Home">
				<div>
					<Title />
					<img className="séparateur" src="https://zupimages.net/up/19/44/l8sr.png" alt="séparateur"></img>
<<<<<<< HEAD
=======
					{/* <img className="séparateur" src="http://meriamr.m.e.pic.centerblog.net/066bb9f4.gif" alt="séparateur"></img> */}
>>>>>>> dev
					<ImageBand />
				</div>
				<div className="HomeText">
					<p>
					Vous aimez prendre des risques ? Vous aimez les jeux potentiellement mortels ?</p>
					<p>Il y a une probabilité d'empoisonnement mais c'est à vous de choisir...</p> 
					<p>Que ce soit parce que vous êtes joueur ou pour que vos invités ne reviennent pas,...
					 nous vous proposons un panel de recettes de cocktail et pizza qui,
					  à défaut de ravir vos papilles, vous offrirons de réelles sensations !!!</p>
					<p>On vous attend sur les prochaines pages, on verra qui sera le plus fort ah ... ah ... ah ...
					</p>
				</div>
				<div className="affichageBouton">
					<h2>Sélectionner votre poison :</h2>
<<<<<<< HEAD
						<div className="HomeButton">

=======
					<div className="HomeButton">
>>>>>>> dev
						<div className="cocktailButton">
							<button className="cocktailButt" type="button" onClick={event=>history.push("/CocktailFilters")}>
							<figure>
								<img
								className="imageCocktail"
								src="https://zupimages.net/up/19/45/d2zu.jpg"
								alt="cocktail"
								></img>
							</figure>
							Get a cocktail</button>
							<div className="label">Pizza</div>
						</div>
						<div className="pizzaButton">
							<button className="pizzaButt" type="button" onClick={event=>history.push("/pizzaFilters")}>Get a pizza
								<figure>
									<img
									className="imagePizza"
									src="https://zupimages.net/up/19/45/uvpl.jpg"
									alt="pizza"
									></img>
								</figure>
							</button>
							<div className="label">Cocktail</div>
						</div>
						<div className="twoButton">
          					<button className="buttonT" type="button" onClick={event=>history.push("/CocktailFilters")}>Get all</button>
						  	<div className="label">Les deux</div>
						</div>
					</div>
				</div>
			</div>
		)	
}

export default Home
