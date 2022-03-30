
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import RecipesContainer from './containers/RecipesContainer';
import RecipeForm from './components/RecipeForm';
import UserForm from './components/UserForm';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header/>
        <>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/recipes"><RecipesContainer/></Route>
            <Route exact path="/recipes/new"><RecipeForm/></Route>
            <Route exact path="/users/new"><UserForm/></Route>
          </Switch>
        </>
      </Router>
      
    </div>
  );
}

export default App;
