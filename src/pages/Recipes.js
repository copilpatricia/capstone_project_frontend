function Recipes({recipes}) {
    return(
        <div>
            {recipes.map((recipe) => {
                return (
                    <>
                    <h1>{recipe.title}</h1>
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
    )
}

export default Recipes