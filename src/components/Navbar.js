import { NavLink} from 'react-router-dom';

const style = {
  margin: 'auto',


}

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="home" to="/" style= {style}>Home</NavLink>  
      <NavLink className="recipes" to="/recipes" style= {style}>Recipes</NavLink>
      <NavLink className="newRecipes" to="/newRecipe" style= {style}>New Recipe</NavLink>
      <NavLink className= "profile" to="/profile" style= {style}>Profile</NavLink>
    </div>
  );
};

export default Navbar;