import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import SignUser from "./pages/SignUser";
//context
import { UserContext } from "./context/UserContext";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  let localStorageUser = JSON.parse(localStorage.getItem("blogUser"));
  console.log(localStorageUser);
  
  const [quote, setQuote] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState(localStorageUser ? localStorageUser : null);



  // API for the quote
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.gameofthronesquotes.xyz/v1/random");
      const data = await res.json();
      console.log(data);

      setQuote(data);
    };
    fetchData();
  }, []);

  // API for the recipes
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/api/recipes/");
      const data = await res.json();
      console.log(data);
      setRecipes(data);
    };
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <Nav />
        {user ? (
          <Routes>
            <Route path="/" element={<MainPage quote={quote} />} />
            <Route path="/recipes" element={<Recipes recipes={recipes} />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
          </Routes>
        ) : (
          <SignUser />
        )}
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;

// store the user object into the local storage
