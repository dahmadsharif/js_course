import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Person from './Person/Person';
import Table from './Table/Table';
import Time from './Time/Time';

class App extends Component {
  render() {
   
    return (
      <Router>
         <div className="container">
       
          
          
   
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/time">Time</Link>
              </li>
              <li>
                <Link to="/person">Person</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/time">
              <Time />
            </Route>
            <Route path="/person">
              <Person />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}



class Home extends Component {
  render () {
    return <h2>Home Class</h2>;
  }
}

export default App;
