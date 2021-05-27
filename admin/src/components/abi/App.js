import './App.css';
import Fetch from './Mine';
import Home from './Home';
import Navbar from './Navbar';
import Mine from './Mine';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Courseup from './Courseup';
import Courseup2 from './Courseup2';
import Delcourse from './Delcourse';

function App() {
  const lol='hfyhg';
  const link="www.google.com";
  return (
    
    // <div className="App">
    //   <Mine/>
    //   <div className="content">
    //     <h1>{lol}</h1>
    //     <p>{[1,2,3,4]}</p>
    //     <p><a href={link}>blah</a></p>
    //     <Home/>
    //   </div><Navbar />
    // </div>
   
             // <Mine />
           //<Courseup/>
           <Router>
      <div className="App">
        
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Courseup">
              <Courseup />
            </Route>
            <Route path="/Courseup2/:id">
              <Courseup2 />
            </Route>
            <Route path="/deletecourse">
              <Delcourse/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
