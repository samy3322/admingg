
import {BrowserRouter as Router, Switch , Route,Redirect} from 'react-router-dom'
import Home from './pages/Home';
import College from './pages/College';
import Products from './pages/Products';
import Course from './pages/Course';
import Jobtype from './pages/Jobtype';
import View from './pages/View';
import Navbar from './Navbar'


function Main(){ 
  return (
    
<div className="left" >
<Navbar/>
<Router>
       
        <Switch>
   
          <Route exact path="/home">
          <Home />
          </Route>
          <Route exact path='/College' component={College} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/Course' component={Course} />
          <Route exact path='/Jobtype' component={Jobtype} />
          <Route exact path='/View' component={View} />
        </Switch>
      </Router>
 
 </div>
  );
};

export default Main;
