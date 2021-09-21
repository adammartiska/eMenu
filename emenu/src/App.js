import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FoodMenuPage from "./pages/food-menu-page";
import DrinksMenuPage from "./pages/drinks-menu-page";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/food">
          <FoodMenuPage />
        </Route>
        <Route path="/drinks">
          <DrinksMenuPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
