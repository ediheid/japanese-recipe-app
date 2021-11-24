import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const RecipeCard = (props) => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div data-aos="fade-up" className="recipes-card" key={props.index}>
      <img className="recipe-img" src={props.imgSrc} alt=""></img>

      <h3 className="recipe-name">{props.recipeLabel}</h3>

      <a
        className="recipe-link"
        href={props.recipeUrl}
        target="_blank"
        rel="noreferrer noopener"
      >
        Click for recipe!
      </a>
    </div>
  );
};

export default RecipeCard;
