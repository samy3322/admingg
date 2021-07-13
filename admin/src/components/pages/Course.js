import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './Course.css';
import Select from 'react-select';
import {Button} from 'react-bootstrap';
import Navbar from './Navbar'

function Course()
{
    const[course,setCourse]=useState("");
    const[stream,setStream]=useState("");
    const[after,setAfter]=useState("");
    const[duration,setDuration]=useState("");
    const[type,setType]=useState("");
    const[about,setAbout]=useState("");
    const[exam_type,setExam_type]=useState("");
    const[eligibility,setEligibility]=useState("");
    const[recuritement,setRecuritement]=useState("");
    const[jobs,setJobs]=useState("");
    const[selectfile,setSelectfile]=useState("");
    const[pdfFile,setPdfFile]=useState("");
    const[pdfFileError,setPdfFileError]=useState("");
   
    const history=useHistory();
    const data = [
        {
          value: "10th",
          label: "10th"
        },
        {
            value: "12th",
            label: "12th"
          },
        {
          value: "graduation",
          label:"graduation"
        }];
      
     
    const styles = {
   
        background: "white",
      
    };
    const styles1 = {
       
        background: "white",
        
    };
  
    const styles2 = {
       
        background: "white",
        
    };
    const styles3 = {
      background: "blue",
      width: "100px",
      height: "40px",
      color:"red",
      
  };
  const handleChange = e =>
  {
    setAfter(e.value);
  }
    const formValidation = () => 
  {
        if (document.getElementsByName('course')[0].value === '') 
        {
            alert('Enter course');
            return false;
        }
        if (document.getElementsByName('stream')[0].value === '') 
        {
          alert('Enter Stream ');
          return false;
        } 
        if (document.getElementsByName('duration')[0].value === '') 
        {
          alert('Enter Duration');
          return false;
      }
      if (document.getElementsByName('type')[0].value === '')
       {
        alert('Enter Course Type');
        return false;
      }
  
      if (document.getElementsByName('about')[0].value === '') 
      {
        alert('Enter about Course');
        return false;
      }
      if (document.getElementsByName('exam_type')[0].value === '')
       {
        alert('Enter Exam type');
        return false;
    }
    if (document.getElementsByName('eligibility')[0].value === '')
     {
      alert('Enter Eligibility criteria ');
      return false;
    }

    if (document.getElementsByName('recuritement')[0].value === '') 
    {
      alert('Enter Recruitment');
      return false;
    }
    if (document.getElementsByName('jobs')[0].value === '')
   {
      alert('Enter Jobs');
      return false;
   }
 
 

return true;
};
async function regi()
{  if (formValidation())
    {
      let item={course,stream,after,duration,type,about,exam_type,eligibility,recuritement,jobs}
    console.log(item)
   let result=await fetch("http://127.0.0.1:8000/api/CourseAdd",{
        method:'POST',
        body:JSON.stringify(item),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
}
    })
    result= await result.json()
  console.warn("result",result)
    alert("Course Added"); 
   
}
}
    
     

return(
<div>
  


<Navbar/>
      <div style={styles1}>
       
         <link rel="stylesheet" href="Course.css"/>
    <div className="container" style={styles2}  >
 
    <div className="w-75 mx-auto shadow p-5" style={styles2}>
      <h2 className="text-center mb-4">Add Course</h2>
  
     
        
        <div className="form-group"><input  className="form-control form-control-lg" type="text"  name="course" value={course}   placeholder=" course name"  onChange={(e)=>setCourse(e.target.value)}/><br/></div>
        <div className="form-group"><input  className="form-control form-control-lg" type="text"  name="stream" value={stream}   placeholder=" stream of course"  onChange={(e)=>setStream(e.target.value)}/><br/></div>
      
        <div>
   course can be done after <Select className="viper"
      placeholder="Select Option"
      //value={after} // set selected value
      options={data} // set list of the data
      onChange={handleChange} // assign onChange function 
    />

    {after && <div style={{ marginTop: 10, lineHeight: '25px' }}>
      <b>Selected Option</b><br />
      <div style={{ marginTop: 10 }}> </div> 
  
    </div>}
    </div>
<br></br>
    <div className="form-group"> <label htmlFor='duration'></label> <input  className="form-control form-control-lg" type="text" name="duration"  value={duration} placeholder="duration" onChange={(e)=>setDuration(e.target.value)} /><br/></div>
    <div className="form-group">  <input  className="form-control form-control-lg" type="text" name="type"  value={type} placeholder="type of course"onChange={(e)=>setType(e.target.value)}/></div>
    <div className="form-group"><textarea  className="form-control form-control-lg" type="text"  name="about" value={about}   placeholder="about the course"  onChange={(e)=>setAbout(e.target.value)}/><br/></div>
    <div className="form-group"><input className="form-control form-control-lg" type="text"  name="exam_type" value={exam_type}   placeholder="type of exam for course"  onChange={(e)=>setExam_type(e.target.value)}/><br/></div>
    <div className="form-group"><input  className="form-control form-control-lg" type="text"  name="eligibility" value={eligibility}   placeholder="academics "  onChange={(e)=>setEligibility(e.target.value)}/><br/></div>
    <div className="form-group"><input  className="form-control form-control-lg" type="text"  name="recuritement" value={recuritement}   placeholder="recuruitement"  onChange={(e)=>setRecuritement(e.target.value)}/><br/></div>
    <div className="form-group"><input  className="form-control form-control-lg" type="text"  name="jobs" value={jobs}   placeholder="jobs "  onChange={(e)=>setJobs(e.target.value)}/><br/></div>
    <center>
    <Button  onClick={regi} >submit</Button>

    </center>


    </div>
         
      
      
        
      
 
    

    </div>
    </div>
  
    </div>

);


}export default Course;
 