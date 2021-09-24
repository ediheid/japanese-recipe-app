import React from "react";
import RecipeCard from "./RecipeCard";

// content variable that will change depending on the functions in the component
let content;

const Main = (props) => {
  if (props.currentRecipes.length > 0) {
    content = props.currentRecipes
      // * Chained filter with map no longer needed for functionality as "japanese" is now a parameter in the api search. But is a good example for the future
      // .filter((recipe) => recipe.recipe.cuisineType.includes("japanese"))
      .map((recipe, index) => {
        return (
          <RecipeCard
            index={index}
            recipeLabel={recipe.recipe.label}
            imgSrc={recipe.recipe.image}
            recipeUrl={recipe.recipe.url}
          />
        );
      });
  } else {
    content = (
      <div>
        <div className="circle-with-text">
          <div className="circle-text">Your food portal to Japan!</div>
        </div>
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
