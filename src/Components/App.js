import React, { useEffect, useState } from "react";
import "../Styling/App.scss";
import Recipe from "./Recipe";
import Main from "./Main";
import Header from "./Header";

const App = () => {
  const APP_ID = "aa176644";
  const APP_KEY = "26b28d399ed74457c2a5e5dcd1ae6e41";

  // const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log(recipes.length);
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);

    // For testing..
    console.log(recipes);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      {/* Form.. */}
      <Header />
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          value={search}
          onChange={updateSearch}
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <Main currentRecipes={recipes} />
      {/* Recipes.. */}

      {/* {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          time={recipe.recipe.totalTime}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))} */}
    </div>
  );
};

export default App;
