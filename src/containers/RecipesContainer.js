import { useState, useEffect } from "react";
import RecipeList from "../components/RecipeList";
import 'bootstrap/dist/css/bootstrap.min.css';

const RecipesContainer= () => {
    const [recipes, setRecipes] = useState([]);

    const [loading, setLoading] = useState(true);
    
    
    useEffect(() => {
        const fetchData = async () =>{
            try {
                const resp = await fetch("http://localhost:9393/recipes")
                const data = await resp.json()
                setRecipes(data)
                setLoading(false)
            } catch (error) {
                alert(error)
            }
        }
        fetchData()
    }, []);
    
    const removeRecipe= (id)=>{
        const filterRecipes =recipes.filter(recipe => recipe.id !== id)
        setRecipes(filterRecipes)
    }
    
    if (loading) return <h1>...Loading...</h1>

    return (
    <div>
        <RecipeList recipes={recipes} removeRecipe={removeRecipe}/>
    </div>
    )
}

export default RecipesContainer;