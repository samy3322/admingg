import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const Sidebar = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Course',
    path: '/Course',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'College',
    path: '/College',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/Team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];








/*import React from 'react';
import './Sidebar.css'
import { bubble as Menu } from 'react-burger-menu';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Course from './pages/Course';


export default props => {
  return (
    <Router>
    <Menu>
    <Switch>
    <Link to="/Course" >
    <Switch> <Course /></Switch>  Course</Link> 
    </Switch>
    </Menu>
    
    </Router>
  );
};
/*
 <a className="bm-item" href="/Company">
        Company
      </a>
      <a className="bm-item" href="/College">
        College
      </a>  
    <a className="bm-item" href="/Smain">
        Student
      </a>
      <a className="bm-item" href="/Student">
      Job seeker
    </a>*/