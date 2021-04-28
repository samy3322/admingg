import Navbar from './Navbar'
import {BrowserRouter as Router, Switch , Route,Redirect} from 'react-router-dom'
import Home from './pages/Home';
import College from './pages/College';
import Products from './pages/Products';
import Course from './pages/Course';



function Main(){ 
  return (
    
<div className="left" >
<Router>
        <Navbar />
        <Switch>
          <Redirect exact from="/" to="/Home" />
          <Route path="/home">
          <Home />
          </Route>
          <Route path='/College' component={College} />
          <Route path='/products' component={Products} />
          <Route path='/Course' component={Course} />
        </Switch>
      </Router>
 
 </div>
  );
};

export default Main;
