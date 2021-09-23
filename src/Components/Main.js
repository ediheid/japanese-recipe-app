import React from "react";

let content;

const Main = (props) => {
  if (props.currentRecipes.length > 0) {
    content = props.currentRecipes.map((recipe, index) => {
      if (recipe.recipe.cuisineType.includes("japanese", "asian")) {
        return (
          <div className="recipes-container">
            <h3 className="recipe-name" key={index}>
              {recipe.recipe.label}
            </h3>
            <p>Total Time: {recipe.recipe.totalTime} </p>
            <img src={recipe.recipe.image} alt=""></img>
            <a
              href={recipe.recipe.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              Click for recipe
            </a>
          </div>
        );
      }
    });
  } else {
    content = (
      <div>
        <h1>omNomNom</h1>
      </div>
    );
  }
  return (
    <div className="main-container">
      <div>{content}</div>
    </div>
  );
};

export default Main;
