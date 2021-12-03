import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/register" component={Register} exact />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
