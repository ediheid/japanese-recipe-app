import React from "react";

let content;

const Main = (props) => {
  if (props.currentRecipes.length > 0) {
    content = props.currentRecipes.map((recipe, index) => {
      if (recipe.recipe.cuisineType.includes("japanese")) {
        return (
          <>
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
          </>
        );
      } else {
        return null;
      }
    });
  } else {
    content = (
      <div>
        <div className="circle-with-text">
          <div className="circle-text">Your food portal to Japan!</div>
        </div>

        {/* <div className="circle-with-text-right">
          <div>Don't know what you are looking for?</div>
          <div className="button-box">
            <button>See all recipes</button>
            <button>Feeling Lucky?</button>
          </div>
        </div> */}
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
