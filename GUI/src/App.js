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
      main: "#1769aa",
      lighter: "##6573C3",
    },
    lighter: {
      main: "#757ce8",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    primaryColor: "#4a148c",
    secondaryColor: "#ff6f00",
    sedatmava: "#C9C9C9",
    carhartt: "#006f33",
    primaryPurple: "#6200EE",
    primaryBlue: "#246EE9",
    lightGray: "#EAEAEA",
    cornFlower: "#7B8CDE",
    charCoal: {
      main: "#2D4654",
    },
    mantis: "#7DD181",
    onyx: {
      main: "#D0CFCF",
      font: "#000",
      // zaujimava modra main: "#6699CC",
      //main: "#DFE0DC",
      //main: "#F4F4F8",
      //main: "#C9CAD9",
    },
    secondary: {
      main: "#6425A7",
    },
    onyxDarker: {
      main: "#484747",
    },
    darkGray: "#ccc",
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
            position="sticky"
            color="onyx"
            sx={{
              marginTop: 0,
              height: 55,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" color="inherit" component="div">
              U stareho kokota
            </Typography>
            <Typography variant="subtitle2" color="inherit" component="div">
              Clementisova 1589/31, Banovce nad Bebravou
            </Typography>
          </AppBar>
          <div className="app-wrapper">
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
                bgcolor: "onyx.main",
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
                sx={{
                  color: "onyx.font",
                  "&.Mui-selected": {
                    color: "secondary.main",
                  },
                }}
                icon={<LocalBarIcon />}
                label="Napoje"
                component={Link}
                to="/drinks"
              />
              <BottomNavigationAction
                sx={{
                  color: "onyx.font",
                  "&.Mui-selected": {
                    color: "secondary.main",
                  },
                }}
                label="Jedla"
                component={Link}
                to="/food"
                icon={<RestaurantIcon />}
              />
              {/* <BottomNavigationAction label="Default" component={Link} to="/" />  */}
            </BottomNavigation>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
