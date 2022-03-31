import RecipeCard from './RecipeCard';

const RecipeList= ({recipes, removeRecipe}) => {
    const renderRecipes = recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} removeRecipe={removeRecipe}/>)
    
    return (
        <div className='r-container' >{renderRecipes}</div>
    )
}

export default RecipeList;