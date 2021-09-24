import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const RecipeCard = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // console.log("Recipe not working");
  return (
    <div data-aos="fade-up" className="recipes-card">
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
