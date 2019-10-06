import React from 'react';
import logo from './res/sineWave.svg';
import './App.css';
import OpzBuddy from './components/OpzBuddy/OpzBuddy'
import OpzBuddyPrivacyPolicy from './components/OpzBuddyPrivacyPolicy/OpzBuddyPrivacyPolicy'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Container>
              <Row>
                <Col><Link to={'/'} className="nav-link"> Home </Link></Col>
                <Col><Link to={'/opzbuddy'} className="nav-link">OP-Z Buddy</Link></Col>
                <Col><Link to={'/opzbuddyprivacypolicy'} className="nav-link">OP-Z Buddy Privacy Policy</Link></Col>
              </Row>
            </Container> 
          </div>
        </header>

        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/opzbuddy' component={OpzBuddy} />
          <Route path='/opzbuddyprivacypolicy' component={OpzBuddyPrivacyPolicy} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;