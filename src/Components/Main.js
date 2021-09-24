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
            dishType={recipe.recipe.dishType}
          />
        );
      });
  } else {
    content = (
      // ! Come back to styling after recipe cards for both mobile and laptop
      <div className="main-landing-view-container">
        <div className="circle-with-text">
          <div className="circle-text">Your food portal to Japan!</div>
        </div>
      </div>
    );
  }
  return <div className="main-container">{content}</div>;
};

export default Main;
