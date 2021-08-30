import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import "./App.css";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">   
          <div className="container">
            <Route exact path="/">
              <Home />
            </Route>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
