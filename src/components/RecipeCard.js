import Card from 'react-bootstrap/Card'
// import { useHistory } from "react-router-dom";


const RecipeCard= ({recipe, removeRecipe}) => {

    // const history = useHistory()

    const handleDelete = () => {
        fetch(`http://localhost:9393/recipes/${recipe.id}`, {
            method: "DELETE",
        })
        .then(()=>removeRecipe(recipe.id))
    }

    
    return (

        <Card className='recipe-card' style={{ width: 'auto' }}>
            <Card.Header>{recipe.name}</Card.Header>
            <Card.Body>
                <Card.Title>{recipe.ingredients}</Card.Title>
                <Card.Text>{recipe.directions}</Card.Text>    
                <button onClick={handleDelete}>Delete</button>
            </Card.Body>
            <Card.Footer className="text-muted">Created by: {recipe.user?.full_name || "N/A"}</Card.Footer>
        </Card>
        
    )
}

export default RecipeCard;