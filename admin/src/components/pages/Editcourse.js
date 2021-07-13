import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Editcourse= () => {
  const [post, setdata] = useState([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    loadUser();
  }, []);
  

  // api/getjob/{id}

  const loadUser = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/api/courseshow`);
    setdata(res.data);
  };

  console.log(post);
  return (<div id="Editcourse">
    <br/>
    <br/>
    <div className="container">
      <div className="py-4">
          Add Course
        <br />
        <br />
        <center>
        <h1>COURSES PROVIDED BY YOURE COLLEGE</h1>
        </center>

        <table >
          <thead className="">
            <tr>
           
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
     
            </tr>
          </thead>
          <tbody>
            {post.map(post => {
              return (   
                <tr> 
                   
                  <td>{post.course}</td>
                  <td>{post.stream}</td>
                  <td>{post.after}</td>
                  <td>{post.duration}</td>
                  <td>{post.type}</td>
                  <td>{post.about}</td>
                  <td>{post.exam_type}</td>
                  <td>{post.eligibility}</td>
                  <td>{post.recruitment}</td>
                  <td>{post.jobs}</td>
                  <td>{post.fees}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>

    </div>
  );
};

export default Editcourse;