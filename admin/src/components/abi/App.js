import './App.css';
import Fetch from './Mine';
import Home from './Home';
import Navbar from './Navbar';
import Mine from './Mine';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Courseup from './Courseup';
import Courseup2 from './Courseup2';
import Delcourse from './Delcourse';
import Fileup from './Fileup';
import Blkcmp from './Blkcmp';
import Unblkcmp from './Unblkcmp';

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
            <Route path="/addclg">
              <Fileup/>
            </Route>
            <Route path="/blkcmp">
              <Blkcmp/>
            </Route>
            <Route path="/unblkcmp">
              <Unblkcmp/>
            </Route>
            <Route path="*">
              <div className="er"><h1>ohh yay thats the way to Mars......</h1>
              <h2>Not for your file</h2>
              <h3>404 NOT FOUND :-(</h3>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
