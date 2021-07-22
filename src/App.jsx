import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page301 from './pages/301.jsx';
import Page501 from './pages/501.jsx';
import Home from './pages/Home.jsx';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/501">
          <Page501 />
        </Route>
        <Route path="/301">
          <Page301 />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
