import React from 'react';
import logo from './res/seeTheSound_logo.png';
import './App.css';
import VisualPlasma from './components/VisualPlasma/VisualPlasma'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Container className="navigation-container">
              <div><Link to='/' className="nav-link">VisualPlasma</Link></div>
              <div><Link to='/privacypolicy' className="nav-link">Privacy-policy</Link></div>
            </Container> 
          </div>
        </header>

        <hr />
        <Switch>
          <Route exact path='/'component={VisualPlasma} />
          <Route path= '/privacypolicy' component={PrivacyPolicy} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
