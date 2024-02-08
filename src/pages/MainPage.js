function MainPage({ quote }) {
  return (
    <>
      <h2 id="title_MP">SIMPLE RECIPES MADE FOR real.actual.everyday life.</h2>
      <section className="quote_section">

          <p id="p_MP">{quote.sentence}</p>
          
       
      </section>
    </>
  );
}

export default MainPage;

// I didn't use the map method because I am accessing directly the sentence property from the quote object
// I don't have an array of objects inside - only one object - random - only one quote generated
