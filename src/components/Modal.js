import React from "react";
import "./Modal.css";
import ShowIngredients from "./ShowIngredients/ShowIngredients";

const Modal = ({ revele, cache, code, ingredients_text, nom }) =>
  revele ? (
    <React.Fragment>
      <div className="overlay" onClick={cache}>
        <div className="wrapper">
          <div className="Modale">
            <button
              type="button"
              className="closeT"
              onClick={cache}
              style={{ height: "30px", width: "30px" }}
            >
              <span>&times;</span>
            </button>
            <div className="modalCard">
              <p className="productOrigin">Va chercher ton bonheur sur : </p>
              <p className="productOrigin">
                https://world.openfoodfacts.org/api/v0/product/{code}
              </p>
              <img
                className="imgOpenFoodFacts"
                src={
                  "https://static.openfoodfacts.org/images/misc/openfoodfacts-logo-fr-178x150.png"
                }
                alt="imgOpenFoodFacts"
              ></img>
              <h4 className="productOrigin">Nom : {nom}</h4>
              <p className="productOrigin">Code : {code}</p>
              <p className="productOrigin">Ingrédients : {ingredients_text}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) : null;

export default Modal;
