//import './card-style.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar'


const Viewc= () => {
  const [post, setdata] = useState([])

  useEffect(() => {
    loadUser();
  }, []);

  const { college_id } = useParams();
  console.log(college_id);

  const styles1 = {
       
    background: "white"
    
};


  // api/getjob/{id}

  const loadUser = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/api/clgshow`);
    setdata(res.data);
  };

  const deleteUser = async college_id => {
    await axios.delete(`http://127.0.0.1:8000/api/coursedelete/${college_id}`);
    loadUser();
    console.warn("delete",deleteUser)
  };

return(
 
    <div>
      <Navbar/>
<div  className="card-body text-dark">

<h4 style={styles1}>College Available</h4>
  {post.map(post => {
    return (   
    <div className='card text-center'>
    <link rel="stylesheet" href="card-style.css"/>
<div className="card-body text-dark">
<h4 className='card-title'>{post.college}</h4>
    <table>
       
<tr>
  <td>College name<p className='card-text text-secondary'>{post.c_name}</p></td>
  <td>Location<p className='card-text text-secondary'>{post.clocation}</p></td>
  <td>Address<p className='card-text text-secondary'>{post.caddress}</p></td>
  <td>Enail-Id<p className='card-text text-secondary'>{post.cemail_id}</p></td>
  <td>ABOUT <p className='card-text text-secondary'>{post.about}</p></td> 
  </tr><br/>
    </table>
    <br/>
        <a href="#" className="btn btn-outline-success">EDIT</a>
        <a href="#" className="btn btn-outline-success"
        onClick={() => deleteUser(post.course_id)}>Delete</a>
         
    );
</div>
</div>   
    );
  })}
    </div>  
    </div> 
     
);     
        
}

export default Viewc;