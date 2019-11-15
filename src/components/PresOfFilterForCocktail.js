import React from "react";
import "./ShowIngredients/ShowIngredients.css";
import Title from "./Title";
import "./PresOfFood.css";
import AlcoholFilter from "./AlcoholFilter";
import { useHistory } from "react-router-dom";

export default PresOfFilterForCocktail;

function PresOfFilterForCocktail() {
  let history = useHistory();
  return (
    <div className="PresOfFood">
      <Title />
      {/* <ImageBand /> */}
      <AlcoholFilter />
      <div className="fourchette">
        <button
          className="ack"
          type="button"
          onClick={event => history.push("/")}
        >
          <figure>
            <img
              className="ack"
              src="data:image/jpeg;base64,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"
              alt="Flèche"
              style={{ width: "30px", height: "30px" }}
            ></img>
          </figure>
        </button>
        <button
          className="buttonGO"
          type="button"
          onClick={event => history.push("/ShowIngredients")}
          style={{ width: "30px", height: "37px" }}
        >
          GO
        </button>
      </div>
    </div>
  );
}
