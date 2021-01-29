import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </Switch>
        </div>
      </Router>
   </ApolloProvider>
  );
}

export default App;
