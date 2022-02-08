import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MealMenuPage from './pages/meal-menu-page';
import DrinksMenuPage from './pages/drink-menu-page';
import CheckoutPage from './pages/checkout-page';
import OrderStatePage from './pages/order-state-page';
import store from '@temp-workspace/customer/redux';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BottomNavigator from './BottomNavigator';
import Header from './Header';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { Wrapper } from './pages/wrapper';
import { WebSocketLink } from '@apollo/client/link/ws';
import { theme } from './constants/theme';

const httpLink = new HttpLink({
  uri: 'http://localhost:8000/graphql',
});

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:8000/graphql',
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
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  //uri: "http://localhost:8000/graphql",
  link: splitLink,
  // fetchOptions: {
  //   mode: 'no-cors',
  // },
  //credentials: "same-origin",
  cache: new InMemoryCache(),
});

// Create a client
const queryClient = new QueryClient();

function App() {
  const [value, setValue] = React.useState('/');
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
                      <MealMenuPage />
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
                    onRouteChange={(event: any, newValue: any) =>
                      setValue(newValue)
                    }
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
