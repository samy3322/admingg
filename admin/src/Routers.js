import React, { Component } from 'react';
import Left from './components/Left';
import Home from './components/pages/Home';
import College from './components/pages/College';
import Products from './components/pages/Products';
import Course from './components/pages/Course';
import Jobtype from './components/pages/Jobtype';
import View from './components/pages/View';
import Viewc from './components/pages/Viewc';
import Main from './components/Main';
import Menu from './components/Menu';
import Courseup2 from './components/pages/Courseup2';
import Blkclg from './components/pages/Blkclg';

import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends Component {



  render() {
    return (
      <Router>
        <div>
        
        <Route exact path="/Left" component={Left} />
        <Route exact path="/Menu" component={Menu} />
        <Route exact path="/Main" component={Main} />
        <Route exact path='/College' component={College} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/Course' component={Course} />
        <Route exact path='/Jobtype' component={Jobtype} />
        <Route exact path='/View' component={View} />
        <Route exact path='/Viewc' component={Viewc} />
        <Route exact path='/Courseup2' component={Courseup2} />
        <Route exact path='/Blkclg' component={Blkclg} />

 
        </div>
      </Router>
    );
  }
}

export default App;