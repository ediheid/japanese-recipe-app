import React, { useEffect, useState } from "react";
import "../Styling/App.scss";

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

  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    if (firstRender === false) {
      // 23/09 change - search for the first 100 results where "cuisineType" is "japanese"
      let newQuery = query + "&to=100&cuisineType=japanese";
      const response = await fetch(
        `https://api.edamam.com/search?q=${newQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    } else {
      setFirstRender(false);
    }
  };

  const updateSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const allRecipesButton = (event) => {
    event.preventDefault();
    setQuery("japanese");
  };

  return (
    <div className="App">
      <Header />

      <Form
        getSearch={getSearch}
        updateSearch={updateSearch}
        search={search}
        currentRecipes={recipes}
        allRecipesButton={allRecipesButton}
      />

      <Main currentRecipes={recipes} />
    </div>
  );
};

export default App;
