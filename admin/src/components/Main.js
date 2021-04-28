import Navbar from './Navbar'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Course from './pages/Course';



function Main(){ 
  return (
    
<div className="left" >
<Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
          <Route path='/Course' component={Course} />
        </Switch>
      </Router>
 
 </div>
  );
};

export default Main;
