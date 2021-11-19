import React, { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";

const Form = (props) => {
  // If user types input - wait for 'event' - search conditions..

  // All recipes
  const getNewSearch = (event) => {
    if (props.search.length > 0) {
      props.getSearch(event, "standard");
    }
  };

  // Vegan
  const getNewVeganSearch = (event) => {
    if (props.search.length > 0) {
      props.getSearch(event, "vegan");
    }
  };

  // Vegetarian
  const getNewVegetarianSearch = (event) => {
    if (props.search.length > 0) {
      props.getSearch(event, "vegetarian");
    }
  };

  return (
    <div className="form-container">
      {/* Form */}
      <form className="search-form">
        {/* Created input container to emulate input field - input and buttons inside this fake input.. */}
        <div className="input-container">
          {/* input */}
          <input
            className="search-bar"
            value={props.search}
            onChange={props.updateSearch}
            placeholder="Know what you want?"
          />

          {/* // !!! Dropdown/'filter' container */}
          {/* <div className="dropdown">
            <span className="filter-button">
              <BiFilterAlt />
            </span> */}

          {/* // !!! Dropdown content */}

          <div className="dropdown-content">
            {/* vegan */}

            {/* <button onClick={getNewVeganSearch} className="veg-button">
              Vegan
            </button> */}
            {/* vegetarian */}
            {/* <button onClick={getNewVegetarianSearch} className="veg-button">
              Vegetarian
            </button> */}
          </div>

          {/* // !!! End dropdown content */}
          {/* </div> */}
          {/* // ! Filter closing div above */}
        </div>

        {/* Regular search */}
        <button onClick={getNewSearch} className="search-button" type="submit">
          Search
        </button>
      </form>

      {/* All recipes Button */}
      <div className="extra-search-function">
        <div className="buttons-box">
          <button onClick={props.allRecipesButton} className="extra-buttons">
            See all recipes
          </button>
          {/* <button className="extra-buttons">Feeling Lucky!</button> */}
        </div>
      </div>
    </div>
  );
};

export default Form;
