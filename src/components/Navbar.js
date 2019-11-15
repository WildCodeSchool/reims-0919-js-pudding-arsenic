import React from "react";
import "./Navbar.css";
import { useHistory } from "react-router-dom";

function Navbar() {
  let history = useHistory();
  return (
    <div className="NavbarButton">
      <div className="NavbarHomeButton">
        <button
          className="NavbarHomeButton"
          type="button"
          onClick={event => history.push("/")}
        >
          <figure>
            <img
              className="imageNavbarHome"
              src="https://zupimages.net/up/19/44/o75l.gif"
              alt="home"
            ></img>
          </figure>
        </button>
      </div>
      <div className="cocktailNavbarButton">
        <button
          className="cocktailNavbarButton"
          type="button"
          onClick={event => history.push("/CocktailFilters")}
        >
          <figure>
            <img
              className="imageNavbarCocktail"
              src="https://zupimages.net/up/19/44/q4bl.jpg"
              alt="cocktail"
            ></img>
          </figure>
        </button>
      </div>
      <div className="pizzaNavbarButton">
        <button
          className="pizzaNavbarButton"
          type="button"
          onClick={event => history.push("/pizzaFilters")}
        >
          <figure>
            <img
              className="imageNavbarPizza"
              src="https://zupimages.net/up/19/44/y8l0.jpg"
              alt="pizza"
            ></img>
          </figure>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
