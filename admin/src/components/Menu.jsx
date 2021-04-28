/*import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function Menu () {
    const [darkMode, setDarkMode] = React.useState(getinitialMode());
  
    React.useEffect(() => {
      localStorage.setItem("dark", JSON.stringify(darkMode));
    }, [darkMode]);
  
    //Mode when app Starts
    function getinitialMode() {
      //we get the mode from localStorage
      const savedMode = JSON.parse(localStorage.getItem("dark"));
      return savedMode || false;
    }
  
    const handletoggle = () => {
      //using previous state to update the toggle
      setDarkMode(prevMode => !prevMode);
    };

    return (
       
        <div className={darkMode ? "dark-mode" : "light-mode"}>
        <nav>
          <div className="toggle-container">
            <span style={{ color: darkMode ? "grey" : "yellow" }}>☀</span>
            <span className="toggle">
              <input
                checked={darkMode}
                onChange={handletoggle}
                type="checkbox"
                className="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox" />
            </span>
            <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
          </div>
        </nav>
        <main>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Amitech</Navbar.Brand>
        <Nav className="mr-auto navbar_wrapper">
            <Link to="/Left">Login</Link>
            
        </Nav>
      </Navbar>
        </main>
      </div>
            
    
          
    );
}
    
export default Menu*/

import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'



const Menu = () => {
    return (
        <div >
            
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand>Amitech</Navbar.Brand>
    <Nav className="mr-auto navbar_wrapper">
        <Link to="/Left">Log out</Link>
        
    </Nav>
  </Navbar>
        </div>
    );
}

export default Menu
