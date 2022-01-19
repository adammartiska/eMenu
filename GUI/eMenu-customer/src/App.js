import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FoodMenuPage from "./pages/food-menu-page";
import DrinksMenuPage from "./pages/drinks-menu-page";
import CheckoutPage from "./pages/checkout-page";
import OrderStatePage from "./pages/order-state-page";
import store from "./store";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import BottomNavigator from "./BottomNavigator";
import Header from "./Header";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { last } from "ramda";
import { QueryClient, QueryClientProvider } from "react-query";
import { split, HttpLink } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";
import { getMainDefinition } from "@apollo/client/utilities";
import { Wrapper } from "./pages/wrapper";
import { WebSocketLink } from "@apollo/client/link/ws";

const httpLink = new HttpLink({
  uri: "http://localhost:8000/graphql",
});

const wsLink = new WebSocketLink({
  uri: "ws://localhost:8000/graphql",
  options: {
    reconnect: true,
    // TODO AUTHENTICATION
    // connectionParams: {
    //   authToken: user.authToken,
    // },
  },
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    console.log(query);
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  //uri: "http://localhost:8000/graphql",
  link: splitLink,
  fetchOptions: {
    mode: "no-cors",
  },
  //credentials: "same-origin",
  cache: new InMemoryCache(),
});

// Create a client
const queryClient = new QueryClient();

const theme = createTheme({
  typography: {
    h6: {
      fontSize: 14,
    },
    h5: {
      fontSize: 15,
    },
    h4: {
      fontSize: 18,
    },
    subtitle2: {
      fontSize: 12,
    },
  },
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
    // black: {
    //   main: "#000",
    // },
    black: "#000000",
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
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Wrapper>
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
                    <Route path="/orderInformation">
                      <OrderStatePage />
                    </Route>
                  </Switch>
                  <BottomNavigator
                    onRouteChange={(event, newValue) => setValue(newValue)}
                    currentRoute={value}
                  />
                </div>
              </Router>
            </Wrapper>
          </ThemeProvider>
        </Provider>
      </ApolloProvider>
    </QueryClientProvider>
  );
}

export default App;
