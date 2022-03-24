import RecipeCard from './RecipeCard';

const RecipeList= ({recipes}) => {
    const renderRecipes = recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)
    
    return (
        <div className='r-container'>{renderRecipes}</div>
    )
}

export default RecipeList;