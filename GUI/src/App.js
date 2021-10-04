import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FoodMenuPage from "./pages/food-menu-page";
import DrinksMenuPage from "./pages/drinks-menu-page";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";

const theme = createTheme({
  // We can define App themes in here
  // status: {
  //   danger: "#e53e3e",
  // },
  // palette: {
  //   primary: {
  //     main: "#0971f1",
  //     darker: "#053e85",
  //   },
  //   neutral: {
  //     main: "#64748B",
  //     contrastText: "#fff",
  //   },
  // },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
