import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import FoodMenuPage from "./pages/food-menu-page";
import DrinksMenuPage from "./pages/drinks-menu-page";
import store from "./store";
import BottomNavigation from "@mui/material/BottomNavigation";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import "./App.css";

const theme = createTheme({
  //We can define App themes in here
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
  components: {
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          // apply theme's border-radius instead of component's default
          minWidth: 20,
        },
        grouped: {
          minWidth: 20,
        },
      },
    },
  },
});

function App() {
  const [value, setValue] = React.useState("/");
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <AppBar
            position="absolute"
            sx={{
              marginTop: 0,
              height: 45,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" color="inherit" component="div">
              U stareho kokota
            </Typography>
          </AppBar>
          <Switch>
            <Route path="/food">
              <FoodMenuPage />
            </Route>
            <Route path="/drinks">
              <DrinksMenuPage />
            </Route>
          </Switch>
          <BottomNavigation
            sx={{
              width: "100%",
              position: "fixed",
              bottom: 0,
            }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              icon={<LocalBarIcon />}
              label="Drinks"
              component={Link}
              to="/drinks"
            />
            <BottomNavigationAction
              label="Food"
              component={Link}
              to="/food"
              icon={<RestaurantIcon />}
            />
            {/* <BottomNavigationAction label="Default" component={Link} to="/" />  */}
          </BottomNavigation>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
