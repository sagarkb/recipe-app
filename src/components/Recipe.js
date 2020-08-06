import React from "react";
import style from "./App.module.css";

const Recipe = (props) => {
  return (
    <div className={style.recipe}>
      <h1>{props.title}</h1>
      <p>{Math.floor(props.calories)}</p>
      <img className={style.image} src={props.image} alt="sexy food image" />
      <ol>
        {props.ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
