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
    <div>
      {recipe && (
        <div>
          <h1>{recipe.title}</h1>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
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
