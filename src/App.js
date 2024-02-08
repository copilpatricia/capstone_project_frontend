import { useEffect, useState } from "react";
import './App.css';
import Nav from './components/Nav';
import Footer from "./components/Footer";
import MainPage from './pages/MainPage';



function App() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.gameofthronesquotes.xyz/v1/random");
      const data = await res.json();
      console.log(data)
      
      setQuote(data)
    }
    fetchData()
  },[])

  return (
    <div>
      <Nav />
      <MainPage quote={quote} />
      <Footer/>
    </div>
  );
}

export default App;
