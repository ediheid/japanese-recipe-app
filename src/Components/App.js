// Dependencies
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

// Sass
import "../Styling/App.scss";

// Imported Components
import Main from "./Main";
import Header from "./Header";
import Form from "./Form";

require("dotenv").config();

// App Component
const App = () => {
  //  State Hooks..
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({
    text: "",
    isVegan: false,
    isVegetarian: false,
  });
  const [firstRender, setFirstRender] = useState(true);
  const [showButton, setShowButton] = useState(false);

  //  API ID and Key
  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;

  // const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // Use effect to get recipes only once query has been updated on first render
  useEffect(() => {
    getRecipes();
  }, [query]);

  // Fetch requests depending on query..
  const getRecipes = async () => {
    // Stops request from fetching on every render..
    if (firstRender === false) {
      // Standard search condition for ALL Japanese recipes..
      // 23/09 change - search for the first 100 results where "cuisineType" is "japanese"
      if (query.isVegan === false) {
        let newQuery = query.text + "&to=100&cuisineType=japanese";

        const response = await fetch(
          `https://api.edamam.com/search?q=${newQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipes(data.hits);
      }

      // ? Commented out dropdown code - removed styling and jsx for extra functionality - to come back to and work on a new filter option
      // Vegetarian
      // else if (query.isVegetarian === true) {
      //   let newQuery =
      //     query.text + "&to=100&cuisineType=japanese&health=vegetarian";

      //   const response = await fetch(
      //     `https://api.edamam.com/search?q=${newQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`
      //   );
      //   const data = await response.json();
      //   setRecipes(data.hits);
      // }

      // Vegan
      // else {
      //   let newQuery = query.text + "&to=100&cuisineType=japanese&health=vegan";

      //   const response = await fetch(
      //     `https://api.edamam.com/search?q=${newQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`
      //   );
      //   const data = await response.json();
      //   setRecipes(data.hits);
      // }
    } else {
      setFirstRender(false);
    }
  };

  // Collect what used is searching for from input value
  const updateSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  // Set the query to the users 'searched' dish and allow user to search via the following 'type' conditions: "standard", "vegan" or "vegetarian" - then reset search string to empty
  const getSearch = (event, type) => {
    event.preventDefault();

    // search all
    if (type === "standard") {
      setQuery({ text: search, isVegan: false });
      setSearch("");
    }
    // ? Commented out dropdown code - removed styling and jsx for extra functionality - to come back to and work on a new filter option
    // // vegetarian
    // else if (type === "vegetarian") {
    //   setQuery({ text: search, isVegetarian: true });
    //   setSearch("");
    // }
    // // vegan
    // else {
    //   setQuery({ text: search, isVegan: true });
    //   setSearch("");
    // }
  };

  // OnClick function for "all recipes" button. Resets query to just "japanese" in the string and defaults back to false for other parameters
  const allRecipesButton = (event) => {
    event.preventDefault();
    setQuery({ text: "japanese", isVegan: false, isVegetarian: false });
  };

  //  Back to Top useEffect (imported dependency)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  //  This function will scroll the window to the top (imported dependency)
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  //  Reset recipes so main page renders again on click - to be used when user clicks the logo
  const clearOnClick = () => {
    setRecipes([]);
  };

  //  JSX
  return (
    <>
      <div className="App">
        <Header resetPage={clearOnClick} />

        <div className="form-component-container">
          <Form
            getSearch={getSearch}
            updateSearch={updateSearch}
            search={search}
            currentRecipes={recipes}
            allRecipesButton={allRecipesButton}
          />
        </div>

        <Main
          currentRecipes={recipes}
          search={search}
          updateSearch={updateSearch}
        />

        {showButton && (
          <button onClick={scrollToTop} className="back-to-top">
            <MdKeyboardArrowUp />
          </button>
        )}
      </div>
    </>
  );
};

export default App;
