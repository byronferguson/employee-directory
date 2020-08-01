import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Wrapper from './components/Wrapper';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Wrapper>
          <Header />
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'}>
              <Main />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
