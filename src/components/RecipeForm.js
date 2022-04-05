import { useState } from "react";
import { useHistory } from "react-router-dom";
import Card  from 'react-bootstrap/Card'
import UserDropdown from "./UserDropdown";

const RecipeForm= () => {
    const [recipe, setRecipe] = useState({
        name: "",
        ingredients: "",
        directions: "",
        user_id: "",
    });

    const history = useHistory()

    const handleChange = (e) => {
        e.target ? setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        }) : setRecipe({
            ...recipe,
            user_id: e
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if ([recipe.name, recipe.ingredients, recipe.directions, recipe.user_id].some(val => val.trim() === "")) {
            alert("Please fill in required field!")
        }

        const newRecipe = {
            name: recipe.name,
            ingredients: recipe.ingredients,
            directions: recipe.directions,
            user_id: parseInt(recipe.user_id)
        };

        fetch("http://localhost:9393/recipes", {
            method: "POST",
            headers:{
                "Content_Type": "application/json",
            },
            body: JSON.stringify(newRecipe)
        })
        .then(()=>history.push("/recipes"))
    }

    return (
        <Card className='new-recipe' style={{ width: '30rem', margin:'auto'}}>
            <Card.Header>New Recipe</Card.Header>
            <Card.Body>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name: </label><br/>
                    <input className="formcss" onChange={handleChange} text="text" name="name" value={recipe.name} required/><br/>
                    <br/>
                    <label htmlFor="ingredients">Ingredients: </label><br/>
                    <textarea className="formcss" onChange={handleChange} text="text" name="ingredients" value={recipe.ingredients} required/><br/>
                    <br/>
                    <label htmlFor="directions">Directions: </label><br/>
                    <textarea className="formcss" onChange={handleChange} text="text"  name="directions" value={recipe.directions} required/>
                    <br/>
                    <label htmlFor="user_id"></label>
                    <UserDropdown onChange={handleChange} handleChange={handleChange} text="text"  name="user_id" value={recipe.user_id}/>
                    <br/>
                    <input type="submit"/>

                </form>
            </Card.Body>
        </Card>
    )
}

export default RecipeForm;