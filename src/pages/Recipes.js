import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Recipes({recipes}) {
    return(
        <>
        <Nav />
        <div>
            {recipes.map((recipe) => {
                return (
                    <>
                    <h1 key={recipe.id}>{recipe.title}</h1>
                    <img src={recipe.image} alt="recipe" />
                    <ul>
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
                       })}
                    
                    </>

                )
            })}
        </div>
        <Footer />
        </>
    )
}

export default Recipes