import { Link } from "react-router-dom";

function Recipes({recipes}) {
    return(
        <>
        
        <div className="container_recipes">
            {recipes.map((recipe) => {
                return (
                    <Link to={`/recipes/${recipe._id}`} key={recipe._id} >
                    <div className="recipes_box">
                    <img src={recipe.image} alt="recipe" className="img_recipes" />
                    <h5 key={recipe._id} className="title_recipes">{recipe.title}</h5>  
                    </div>
                    
                    </Link>

                )
            })}
        </div>
       
        </>
    )
}

export default Recipes



