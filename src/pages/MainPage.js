import Nav from "../components/Nav";
import Footer from "../components/Footer";

function MainPage({ quote }) {
  return (
    <>
    <Nav />
    <div className="container_main">
      <h2 id="title_MP">
        SIMPLE RECIPES MADE FOR
        <span id="word_MP">real. actual. everyday life.</span>
      </h2>
      <section className="quote_section">
        <div className="quote_container">
          <p id="p_MP">{quote.sentence}</p>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}

export default MainPage;

// I didn't use the map method because I am accessing directly the sentence property from the quote object
// I don't have an array of objects inside - only one object - random - only one quote generated
