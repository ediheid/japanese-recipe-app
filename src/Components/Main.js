import React from "react";

let content;

const Main = (props) => {
  if (props.currentRecipes.length > 0) {
    content = props.currentRecipes
      // * Chained filter with map no longer needed for functionality as "japanese" is now a parameter in the api search. But is a good example for the future
      // .filter((recipe) => recipe.recipe.cuisineType.includes("japanese"))
      .map((recipe, index) => {
        return (
          <>
            <div className="recipes-container">
              <h3 className="recipe-name" key={index}>
                {recipe.recipe.label}
              </h3>
              <p>Total Time: {recipe.recipe.totalTime} </p>
              <p>{recipe.recipe.cuisineType}</p>
              <img src={recipe.recipe.image} alt=""></img>
              <a
                href={recipe.recipe.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                Click for recipe
              </a>
            </div>
          </>
        );

        // else {
        //   return null;
        // }
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
