import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FoodMenuPage from "./pages/food-menu-page";
import DrinksMenuPage from "./pages/drinks-menu-page";
import CheckoutPage from "./pages/checkout-page";
import store from "./store";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import BottomNavigator from "./BottomNavigator";
import Header from "./Header";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql/",
  //uri: "https://api.spacex.land/graphql/",
  // fetchOptions: {
  //   mode: "no-cors",
  // },
  //credentials: "same-origin",
  cache: new InMemoryCache(),
});

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
    secondaryLighter: {
      main: "#F4EDFB",
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
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Header />
            <div className="app-wrapper">
              <Switch>
                <Route path="/food">
                  <FoodMenuPage />
                </Route>
                <Route path="/drinks">
                  <DrinksMenuPage />
                </Route>
                <Route path="/cart">
                  <CheckoutPage />
                </Route>
              </Switch>
              <BottomNavigator
                onRouteChange={(event, newValue) => setValue(newValue)}
                currentRoute={value}
              />
            </div>
          </Router>
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
