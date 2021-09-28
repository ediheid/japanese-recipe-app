import React from "react";
import { BiFilterAlt } from "react-icons/bi";

const Form = (props) => {
  const getNewSearch = (event) => {
    if (props.search.length > 0) {
      props.getSearch(event, "standard");
    }
  };

  const getNewVeganSearch = (event) => {
    if (props.search.length > 0) {
      props.getSearch(event, "vegan");
    }
  };

  const getNewVegetarianSearch = (event) => {
    if (props.search.length > 0) {
      props.getSearch(event, "vegetarian");
    }
  };

  return (
    <div className="form-container">
      <form className="search-form">
        <div className="input-container">
          <input
            className="search-bar"
            value={props.search}
            onChange={props.updateSearch}
            placeholder="Know what you want?"
          />
          <div className="dropdown">
            <button className="filter-button">
              <BiFilterAlt />
            </button>
            <div className="dropdown-content">
              <button onClick={getNewVeganSearch} className="veg-button">
                Vegan
              </button>

              <button onClick={getNewVegetarianSearch} className="veg-button">
                Vegetarian
              </button>
            </div>
            {/* <button onClick={getNewVeganSearch} className="vegetarian-button">
              Search Vegetarian
            </button> */}
          </div>
        </div>
        <button onClick={getNewSearch} className="search-button" type="submit">
          Search
        </button>
      </form>

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
