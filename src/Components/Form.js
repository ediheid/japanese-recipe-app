import React from "react";

const Form = (props) => {
  return (
    <div className="form-container">
      <form onSubmit={props.getSearch} className="search-form">
        {/* <div> */}
        <input
          className="search-bar"
          value={props.search}
          onChange={props.updateSearch}
          placeholder="Know what you want?"
        />
        {/* </div> */}
        <button className="search-button" type="submit">
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
