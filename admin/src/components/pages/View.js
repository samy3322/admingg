import './card-style.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const View= () => {
  const [post, setdata] = useState([]);


  useEffect(() => {
    loadUser();
  }, []);
  const { course_id } = useParams();
  console.log(course_id);

  const styles1 = {
       
    background: "white",
    
};


  // api/getjob/{id}

  const loadUser = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/api/courseshow`);
    setdata(res.data);
  };
  const deleteUser = async course_id => {
    await axios.delete(`http://127.0.0.1:8000/api/coursedelete/${course_id}`);
    loadUser();
    console.warn("delete",deleteUser)
  };

return(
    
<div  className="card-body text-dark">
<h4 style={styles1}>COURSE AVAILABLE</h4>
  {post.map(post => {
    return (    

    
    <div className='card text-center'>
  
    <link rel="stylesheet" href="card-style.css"/>


<div className="card-body text-dark">
<h4 className='card-title'>{post.course}</h4>
    <table>
       
<tr>
  <td>STREAM<p className='card-text text-secondary'>{post.stream}</p></td>
  <td>AFTER<p className='card-text text-secondary'>{post.after}</p></td>
  <td>DURATION<p className='card-text text-secondary'>{post.duration}</p></td>
  <td>TYPE<p className='card-text text-secondary'>{post.type}</p></td>
  <td>ABOUT <p className='card-text text-secondary'>{post.about}</p></td> 
  </tr><br/>
<tr>
    <td>EXAM_TYPE  <p className='card-text text-secondary'>{post.exam_type}</p></td>
     <td>ELIGIBILITY <p className='card-text text-secondary'>{post.eligibility}</p></td>
    <td>RECURITEMENT<p className='card-text text-secondary'>{post.recruitment}</p></td>
    <td>JOBS<p className='card-text text-secondary'>{post.jobs}</p></td>
   <td> FEES<p className='card-text text-secondary'>{post.fees}</p></td></tr>
    </table>
    <br/>
        <a href="#" className="btn btn-outline-success">EDIT</a>
        <a href="#" className="btn btn-outline-success"
                      onClick={() => deleteUser(post.course_id)}>Delete</a>
</div>
</div>
       
       
  
        
    );
  })}
    </div>    
);     
        
    }

export default View;