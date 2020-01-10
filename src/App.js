import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';

import apolloClient from './services/apollo';

import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <TodoList />
      </ApolloProvider>
    );
  }
}

export default App

 /* Anterior, básico
 ...
 render() {
  function App() {
    return (
    <div className="App">
      <h1>Hello World 2</h1>
    </div> 
    );
  }
   */

