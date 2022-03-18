
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/recipes"></Route>
            <Route exact path="/newRecipe"></Route>
          </Switch>
        </>
      </Router>
      
    </div>
  );
}

export default App;
