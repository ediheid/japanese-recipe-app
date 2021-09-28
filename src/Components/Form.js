import React from "react";

const Form = (props) => {
  const getNewSearch = (event) => {
    props.getSearch(event, "standard");
  };

  const getNewVeganSearch = (event) => {
    props.getSearch(event, "vegan");
  };

  return (
    <div className="form-container">
      <form className="search-form">
        {/* <div> */}
        <input
          className="search-bar"
          value={props.search}
          onChange={props.updateSearch}
          placeholder="Know what you want?"
        />

        <button onClick={getNewVeganSearch}>Vegan</button>
        {/* </div> */}
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
