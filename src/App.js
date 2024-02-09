import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MainPage from './pages/MainPage';
// import Recipes from "./pages/Recipes";

function App() {
  const [quote, setQuote] = useState([]);
  // const [recipes, setRecipes] = useState([]);

  // API for the quote
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.gameofthronesquotes.xyz/v1/random");
      const data = await res.json();
      console.log(data)

      setQuote(data)
    }
    fetchData()
  },[])

  // API FOR THE RECIPES
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:4000/api/recipes/");
  //     const data = await res.json();
  //     console.log(data)
  //     setRecipes(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <Nav />
      {/* <Recipes recipes={recipes} /> */}
      <MainPage quote={quote} />
      <Footer />
    </div>
  );
}

export default App;
