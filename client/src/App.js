import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import logo from './logo.svg';
import './App.css';
import ElementsList from './components/Elements';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Chemistry</h1>
          </header>
          <ElementsList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
