import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Select from 'react-select';
import {Button, Form,Container} from 'react-bootstrap';

function Jobtype()
{
    const[Jobs,setJob]=useState("");
 /*   const handleChange = e =>
    {
      setAfter(e);
    }*/
  

async function Job()
{
    let item={Jobs};
    console.warn(item)
    let result=await fetch("http://127.0.0.1:8000/api/CourseAdd",
    {
        method:'POST',
        body:JSON.stringify(item),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                    }
    })
    result= await result.json()
  console.warn("result",result)
    alert("Job type Added"); 
}

  
 return(
      
<div >                
    <Container>  
   
    <Form.Group controlId="formBasicName">
<Form.Label>Job Type</Form.Label>
<Form.Control  
type="Text" 
placeholder="Job Type" 
onChange={(e)=>setJob(e.target.value)}
style={{width:"70%"}}/>
</Form.Group>
 
<Button variant="dark"  onClick={Job}>Submit </Button>

</Container>
</div>
);
}export default Jobtype;