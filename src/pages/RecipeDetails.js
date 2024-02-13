import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function RecipeDetails() {
  const params = useParams();
  const [recipe, setRecipe] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [comment, setComment] = useState("");

  //post a new review logic

  const handleReviewSubmit = async(e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://blog-app-backend-nrpv.onrender.com/api/reviews/", {
      // username: username,
      review: comment
      });

    console.log( res.data);
      setReviews([...reviews, res.data]);
      setComment("");
      
    } catch (error) {
      console.log(error);
    }
  }



  // fetch the data from the backend to display the content of each recipe
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://blog-app-backend-nrpv.onrender.com/api/recipes/${params.id}`
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

  // fetch the data from the backend to display the name and the review of each person
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://blog-app-backend-nrpv.onrender.com/api/reviews"
        );
        const data = await res.json();
        console.log(data);
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="supercontainer_recipe">
        {recipe && (
          <div className="container_recipe">
            <img
              src={recipe.image}
              alt="single recipe"
              className="image_recipe"
            />
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
      <div
        className="review_container"

      >
        <h1 id="review_title">Reviews</h1>
        <hr />
        <form onSubmit={handleReviewSubmit}>
          <input
            id="input_review"
            type="text"
            value={comment}
            placeholder="Give us a review for this recipe..."
            onChange={(e) => setComment(e.target.value)}
          />
          <button id="review_btn">POST</button>
        </form>
        
        <h2 id="other_reviews">Other reviews</h2>
        { reviews && reviews.map((review) => {
          return (
            <>
            <p>{review.username}</p>
            <p>{review.review}</p>
            </>

          )
        })}
      </div>
      </div>
    </>
  );
}

export default RecipeDetails;
