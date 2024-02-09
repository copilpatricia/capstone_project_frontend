import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Recipes({recipes}) {
    return(
        <>
        <Nav />
        <div className="container_recipes">
            {recipes.map((recipe) => {
                return (
                    <div className="recipes_box">
                    <img src={recipe.image} alt="recipe" className="img_recipes" />
                    <h5 key={recipe.id} className="title_recipes">{recipe.title}</h5>
                    {/* <ul>
                       {recipe.ingredients.map((ingredient) => {
                        return (
                            <li>{ingredient}</li>
                        )
                       })}
                    </ul>
                       {recipe.instructions.map((instruction) => {
                        return (
                            <p>{instruction}</p>
                        )
                       })} */}
                    
                    </div>

                )
            })}
        </div>
        <Footer />
        </>
    )
}

export default Recipes