import React, { useEffect, useState } from "react";

import { MdKeyboardArrowUp } from "react-icons/md";

import "../Styling/App.scss";

import Main from "./Main";
import Header from "./Header";
import Form from "./Form";

const App = () => {
  // ? State Hooks..
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [firstRender, setFirstRender] = useState(true);
  const [showButton, setShowButton] = useState(false);

  // ? API Functionality
  const APP_ID = "aa176644";
  const APP_KEY = "26b28d399ed74457c2a5e5dcd1ae6e41";

  // const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

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

  // ? Back to Top Functionality

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // ? JSX return

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

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <MdKeyboardArrowUp />
        </button>
      )}
    </div>
  );
};

export default App;
