import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import RecipeCard from "./RecipeCard";

import lantern from "../Static/lantern.png";

// ? content variable that will change depending on the functions in the component
let content;

// ? Component
const Main = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  if (props.currentRecipes.length > 0) {
    content = props.currentRecipes
      // * Chained filter with map no longer needed for functionality as "japanese" is now a parameter in the api search. But is a good example for the future
      // .filter((recipe) => recipe.recipe.cuisineType.includes("japanese"))
      .map((recipe, index) => {
        return (
          <>
            <RecipeCard
              index={index}
              recipeLabel={recipe.recipe.label}
              imgSrc={recipe.recipe.image}
              recipeUrl={recipe.recipe.url}
            />
          </>
        );
      });

    console.log(props.currentRecipes);
  } else {
    content = (
      <div className="main-landing-view-container">
        <div data-aos="fade-up-right" className="circle-with-text">
          <div className="circle-text">Your food portal to Japan!</div>
        </div>
        <img
          data-aos="fade-down-left"
          className="lantern-png"
          src={lantern}
          alt="red lantern with japanese text"
        ></img>
      </div>
    );
  }
  return <div className="main-container">{content}</div>;
};

export default Main;
