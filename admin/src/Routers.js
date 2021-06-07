import React, { Component } from 'react';
import Left from './components/Left';
import Main from './components/Main'
import Home from './components/pages/Home';
import College from './components/pages/College';
import Products from './components/pages/Products';
import Course from './components/pages/Course';
import Jobtype from './components/pages/Jobtype';
import View from './components/pages/View';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends Component {



  render() {
    return (
      <Router>
        <div>
          <Navbar />
        <Route exact path="/Left" component={Left} />
        <Route exact path="/Main" component={Main} />
        <Route exact path='/College' component={College} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/Course' component={Course} />
        <Route exact path='/Jobtype' component={Jobtype} />
        <Route exact path='/View' component={View} />
        <Route path="*">
              <center>
              <div className="er"><h1>ohh yay that Route is for Mars......</h1>
              <h2>Not for your file</h2>
              <h3>404 NOT FOUND :-(</h3>
              </div></center>
            </Route>
        </div>
      </Router>
    );
  }
}

export default App;