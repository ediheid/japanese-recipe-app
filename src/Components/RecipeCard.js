import React from "react";

const RecipeCard = (props) => {
  console.log("Recipe not working");
  return (
    <>
      <div className="recipes-container">
        <h3 className="recipe-name" key={props.index}>
          {props.recipeLabel}
        </h3>

        <img src={props.imgSrc} alt=""></img>
        <a href={props.recipeUrl} target="_blank" rel="noreferrer noopener">
          Click for recipe
        </a>
      </div>
    </>
  );
};

export default RecipeCard;
