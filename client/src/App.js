import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ Homepage } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
