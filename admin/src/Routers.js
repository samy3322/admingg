import React, { Component } from 'react';
import Left from './components/Left';
import Main from './components/Main'
import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends Component {



  render() {
    return (
      <Router>
        <div>
        <Route exact path="/Left" component={Left} />
        <Route exact path="/Main" component={Main} />
        </div>
      </Router>
    );
  }
}

export default App;