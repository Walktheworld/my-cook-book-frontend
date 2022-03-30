import { NavLink} from 'react-router-dom';

const style = {
  margin: 'auto',


}

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="home" to="/" style= {style}>Home</NavLink>  
      <NavLink className="recipes" to="/recipes" style= {style}>Recipes</NavLink>
      <NavLink className="new-recipe" to="/recipes/new" style= {style}>New Recipe</NavLink>
      <NavLink className= "new-user" to="/users/new" style= {style}>New User</NavLink>
    </div>
  );
};

export default Navbar;