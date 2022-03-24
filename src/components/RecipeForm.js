import { useState } from "react";
import { useHistory } from "react-router-dom";

const RecipeForm= () => {
    const [recipe, setRecipe] = useState({
        name: "",
        ingredients: "",
        directions: "",
    });

    const handleChange = e => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if ([recipe.name, recipe.ingredients, recipe.directions].some(val => val.trim() === "")) {
            alert("Please fill in all blanks")
        }
        const newRecipe = {
            name: recipe.name,
            ingredients: recipe.ingredients,
            directions: recipe.directions
        }
        fetch("http://localhost:9393/recipes", {
            method: "POST",
            headers:{
                "Content_Type": "application/json",
            },
            body: JSON.stringify(newRecipe)
        })
    }
    return (
        <>
            <div>New Recipe</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={handleChange} text="text" name="name" value={recipe.name} required/><br/>

                <label htmlFor="ingredients">Ingredients</label>
                <input onChange={handleChange} text="text" name="ingredients" value={recipe.ingredients} required/><br/>

                <label htmlFor="directions">Directions</label>
                <input onChange={handleChange} text="text" name="directions" value={recipe.directions} required/><br/>
            </form>
            
        </>
    )
}

export default RecipeForm;