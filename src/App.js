import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Recipes from "./pages/Recipes";
import About from "./pages/About";

function App() {
  const [quote, setQuote] = useState([]);
  const [recipes, setRecipes] = useState([]);

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
    <div>
      <Routes>
        <Route path="/" element={<MainPage quote={quote} />}/>
        <Route path="/recipes" element={<Recipes recipes={recipes} />}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
