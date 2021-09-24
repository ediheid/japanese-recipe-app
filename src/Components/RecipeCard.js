import React from "react";

const RecipeCard = (props) => {
  console.log("Recipe not working");
  return (
    <div className="recipes-card">
      <img className="recipe-img" src={props.imgSrc} alt=""></img>

      {/* <h5 className="dish-type">
        Dish Type: <br /> {props.dishType}
      </h5> */}
      <h3 className="recipe-name" key={props.index}>
        {props.recipeLabel}
      </h3>

      <a
        className="recipe-link"
        href={props.recipeUrl}
        target="_blank"
        rel="noreferrer noopener"
      >
        Click for recipe
      </a>
    </div>
  );
};

export default RecipeCard;
