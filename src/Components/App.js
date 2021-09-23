import React, { useEffect, useState } from "react";
import "../Styling/App.scss";
import Recipe from "./Recipe";
import Main from "./Main";
import Header from "./Header";
import Form from "./Form";

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
    let newQuery = query + "&to=100";
    const response = await fetch(
      `https://api.edamam.com/search?q=${newQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);

    // For testing..
    console.log(recipes);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <Header />

      <Form getSearch={getSearch} updateSearch={updateSearch} search={search} />

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
