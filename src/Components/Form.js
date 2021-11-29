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
        {/* input */}
        <input
          className="search-bar"
          value={props.search}
          onChange={props.updateSearch}
          placeholder="e.g. Miso"
        />

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
