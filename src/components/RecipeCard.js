import Card  from 'react-bootstrap/Card'



const RecipeCard= ({recipe}) => {
    return (
        // < div style={{ width: '18rem', border: "ridge"} }>
        //     <body>
        //         <h3>{recipe.name}</h3>
        //         <p>{recipe.ingredients}</p>
        //         <p>{recipe.directions}</p>
        //     </body>
        // </div>

        <Card className='recipe-card' style={{ width: 'auto' }}>
            <Card.Header>{recipe.name}</Card.Header>
            <Card.Body>
                <Card.Title>{recipe.ingredients}</Card.Title>
                <Card.Text>{recipe.directions}</Card.Text>
            </Card.Body>
        </Card>
        
    )
}

export default RecipeCard;