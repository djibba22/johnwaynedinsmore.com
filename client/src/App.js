import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home/index';
import Products from './components/Products/index';
import "./App.css";

// import { createTheme ,ThemeProvider} from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    
    <ApolloProvider client={client}>
      <Router>
      <Navigation />
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            {/*<Route path="/about">
               <About />
               </Route>
              <Route path="/tutorials">
                <Tuts />
              </Route>*/}
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
