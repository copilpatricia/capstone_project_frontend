import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeDetails() {
  const params = useParams();
  const [recipe, setRecipe] = useState(null);

  // fetch the data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:4000/api/recipes/${params.id}`
        );
        const data = await res.json();
        console.log(data);
        setRecipe(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <div className="supercontainer_recipe">
      {recipe && (
        <div className="container_recipe">
          <img src={recipe.image} alt="single recipe" className="image_recipe" />  
          <h1 id="recipe_title">{recipe.title}</h1>
          <hr />
          <h3 className="recipe_subtitle">INGREDIENTS</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3 className="recipe_subtitle">INSTRUCTIONS</h3>
          <ul>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
