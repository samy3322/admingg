import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './Course.css';
import Select from 'react-select';
import {Button} from 'react-bootstrap';

function College()
{
    const[c_name,setC_name]=useState("");
    const[clocation,setClocation]=useState("");
    const[caddress,setCaddress]=useState("");
    const[cno1,setCno1]=useState("");
    const[cno2,setCno2]=useState("");
    const[cemail_id,setCemail_id]=useState("");
    const[about,setAbout]=useState("");
    const[academic,setAcademic]=useState("");
    const[accommodation,setAccommodation]=useState("");
    const[faculty,setFaculty]=useState("");
    const[infrastructure,setInfrastructure]=useState("");
    const[placement,setPlacement]=useState("null");
    const[average,setAverage]=useState("");
    const[affiliated_to,setAffiliated_to]=useState("");
    const[certficate,setCertficate]=useState("");
    const[college_status,setCollege_status]=useState("");
    const[cpassword,setCpassword]=useState("");

    const [cno1Error, setCno1Error] = useState({})
    const [cpasswordError,setCpasswordError] = useState({})

    const [cemail_idError, setCemail_idError] = useState({})
    const [averageError, setAverageError] = useState({})
    const[selectfile,setSelectfile]=useState("");
    const[pdfFile,setPdfFile]=useState("");
    const[pdfFileError,setPdfFileError]=useState("");
   
    const history=useHistory();
    const data = [
      {
        value: 0,
        label: "yes"
      },
      {
        value: 1,
        label: "no"
      }];
       const handleChange = e => {
        setPlacement(e);
      }
     
    const styles = {
   
      background: "white",
      
    };
    const styles1 = {
       
      background: "#4169E1",
        
    };
  
 
  
const fileType=['application/pdf'];
const handlepdf=(e)=>{
  let selectedpdf=e.target.files[0];
  if(selectedpdf)
  {
    if(selectedpdf&&fileType.includes(selectedpdf.type))
    {
      let reader = new FileReader();
      reader.readAsDataURL(selectedpdf);
      reader.onloadend = (e) =>{
        setPdfFile(e.target.result);
        setPdfFileError('');
    }

  }
  else{
    setPdfFile(null);
    setPdfFileError('Please select valid pdf file');
  }
}
else{
  console.log('select your file');
}
}
const onSubmit=(e)=>
{
  e.preventDefault();
  const isValid = formValidation1(); 
}
const formValidation1=()=>{
  const cno1Error={};
  const cpasswordError={};
  let isValid = true;

if(cno1.trim().length < 10)
{
  cno1Error.cno1short="cno is short";
  isValid = false;
}
if(cno1.trim().length > 10)
{
  cno1Error.cno1long="number should not be greater than 10";
  isValid = false;
}
if(cpassword.trim().length < 8)
{
  cpasswordError.cpasswordshort="password is short is short";
  isValid = false;
}
if(!cemail_id.includes(".com"))
{
  cemail_idError.cemail_idinclude="email is invalid";
  isValid = false;
}

setAverageError(averageError);
setCemail_idError(cemail_idError);
setCno1Error(cno1Error);
setCpasswordError(cpasswordError);
return isValid;
}
  const fileSelectedHandler=  event =>
  {
    setSelectfile(event.target.files[0])
  }

  
    const formValidation = () => {
     
        if (document.getElementsByName('c_name')[0].value === '') {
            alert('Enter name');
            return false;
        }
        if (document.getElementsByName('clocation')[0].value === '') {
          alert('Enter location ');
          return false;
        }
    
        if (document.getElementsByName('caddress')[0].value === '') {
          alert('Enter address');
          return false;
        }
        if (document.getElementsByName('cno1')[0].value === '') {
          alert('Enter contact no');
          return false;
      }
      if (document.getElementsByName('cemail_id')[0].value === '') {
        alert('Enter email id ');
        return false;
      }
      
  
      if (document.getElementsByName('about')[0].value === '') {
        alert('Enter about');
        return false;
      }
      if (document.getElementsByName('academic')[0].value === '') {
        alert('Enter academic');
        return false;
    }
    if (document.getElementsByName('accommodation')[0].value === '') {
      alert('Enter accomadation ');
      return false;
    }

    if (document.getElementsByName('faculty')[0].value === '') {
      alert('Enter faculty');
      return false;
    }
    if (document.getElementsByName('infrastructure')[0].value === '') {
      alert('Enter name');
      return false;
  }

  if (document.getElementsByName('average')[0].value === '') {
    alert('Enter email');
    return false;
  }
  if (document.getElementsByName('affiliated_to')[0].value === '') {
    alert('Enter name');
    return false;
}
if (document.getElementsByName('certficate')[0].value === '') {
  alert('Enter password ');
  return false;
}

if (document.getElementsByName('college_status')[0].value === '') {
  alert('Enter email');
  return false;
}
if (document.getElementsByName('cpassword')[0].value === '') {
  alert('Enter PASSWORD');
  return false;
}
return true;
};
async function regi()
{  if (formValidation())
    {
      if(formValidation1())
    {
       let item={c_name,clocation,caddress,cno1,cno2,cemail_id,about,academic,accommodation,faculty,placement,average,affiliated_to,college_status,cpassword}
    console.warn(item)
    let result=await fetch("http://127.0.0.1:8000/api/collegeadd",{
        method:'post',
        body:JSON.stringify(item),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
}
    })
    result= await result.json()
 
    alert("Course Added"); 
   
}
    }
}
    
     

return(


<div>
  
      <div style={styles}>
        
         <link rel="stylesheet" href="Course.css"/>
    <div className="container"  style={styles}  >
 
    <div style={styles1} className="w-75 mx-auto shadow p-5" >
      <h2 className="text-center mb-4">Add College</h2>
  
     
        
        <div className="form-group"><input  className="form-control form-control-lg" type="text"  name="c_name" value={c_name}   placeholder=" ENTER THE COLLEGE NAME"  onChange={(e)=>setC_name(e.target.value)}/><br/></div>
        <div className="form-group"><input  className="form-control form-control-lg" type="text"  name="clocation" value={clocation}   placeholder=" ENTER THE LOCATION"  onChange={(e)=>setClocation(e.target.value)}/><br/></div>
        <div className="form-group"><textarea className="form-control form-control-lg" type="text"  name="caddress" value={caddress}   placeholder=" ENTER THE ADDRESS"  onChange={(e)=>setCaddress(e.target.value)}/><br/></div>
         <div className="form-group"> <input  className="form-control form-control-lg" type="text" name="cno1"  value={cno1} placeholder="ENTER THE CONTACT NUMBER" onChange={(e)=>setCno1(e.target.value)}/> <br/>
         {Object.keys(cno1Error).map((key)=>{return <div style={{color :"red"}}>{cno1Error[key]}</div>})}</div>
         <div className="form-group">  <input   className="form-control form-control-lg" type="text" name="cno2"  value={cno2} placeholder="ENTER ANOTHER CONTACT NUMBER"onChange={(e)=>setCno2(e.target.value)}/></div>
         <div className="form-group"> <label htmlFor='email'>Email</label><input  className="form-control form-control-lg" type="email"  name="cemail_id" value={cemail_id}   placeholder=" ENTER THE EMAIL ID"  onChange={(e)=>setCemail_id(e.target.value)}/><br/>
         {Object.keys(cemail_idError).map((key)=>{return <div style={{color :"red"}}>{cemail_idError[key]}</div>})} </div>
         <div className="form-group"><textarea className="form-control form-control-lg" type="text"  name="about" value={about}   placeholder=" ABOUT"  onChange={(e)=>setAbout(e.target.value)}/><br/></div>
         <div className="form-group"><input  className="form-control form-control-lg" type="text"  name="academic" value={academic}   placeholder="academics "  onChange={(e)=>setAcademic(e.target.value)}/><br/></div>
         <div className="form-group"><input  className="form-control form-control-lg" type="text"  name="accommodation" value={accommodation}   placeholder=" ENTER THE COLLEGE ACCOMANDATIONS "  onChange={(e)=>setAccommodation(e.target.value)}/><br/></div>
         <div className="form-group"><input  className="form-control form-control-lg" type="number"  name="faculty" value={faculty}   placeholder="TOTAL FACULTY IN COLLEGE"  onChange={(e)=>setFaculty(e.target.value)}/><br/></div>
         <div className="form-group"><input type="file" required onChange={handlepdf} className="form-control form-control-lg"  name="infrastructure" value={infrastructure}   placeholder="ABOUT INFRASTRUCTURE"  onChange={(e)=>setInfrastructure(e.target.value)}/><br/>
   
         </div>
         
      
      
         <div>
     PLACEMENT AVAILABLITY <Select className="viper"
        placeholder="Select Option"
        value={placement} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
      />placement
 
      {placement && <div style={{ marginTop: 20, lineHeight: '25px' }}>
        <b>Selected Option</b><br />
        <div style={{ marginTop: 10 }}> {placement.label}</div>
    
      </div>}
    </div>
         <div className="form-group"><input  className="form-control form-control-lg" type="text"  name="average" value={average}   placeholder="AVERAGE GRADE"  onChange={(e)=>setAverage(e.target.value)}/><br/>
         {Object.keys(averageError).map((key)=>{return <div style={{color :"red"}}>{averageError[key]}</div>})}</div>
         <div className="form-group"><input  className="form-control form-control-lg" type="text"  name="affiliated_to" value={affiliated_to}   placeholder=" ENTER THE  "  onChange={(e)=>setAffiliated_to(e.target.value)}/><br/></div>
         <div className="form-group"><input  className="form-control form-control-lg" type="text"  name="college_status" value={college_status}   placeholder=" ENTER THE COLLEGE status"  onChange={(e)=>setCollege_status(e.target.value)}/><br/></div>
         <div className="form-group"><input  className="form-control form-control-lg" type="password"  name="cpassword" value={cpassword}   placeholder=" ENTER THE PASSWORD"  onChange={(e)=>setCpassword(e.target.value)}/><br/>{Object.keys(cpasswordError).map((key)=>{return <div style={{color :"red"}}>{cpasswordError[key]}</div>})}</div>
         <div className="form-group">upload verfied certficate of college<input type="file" className="form-control form-control-lg"   name="certficate" value={certficate}   placeholder="select the certficate"  onChange={(e)=>setCertficate(e.target.value)}/><br/></div>
         {pdfFileError&&<div className='form-control form-control-lg'>{pdfFileError}</div>}
     <div className="pdf-container"></div>
        <br/>
      <center>  <Button  onClick={regi} >submit</Button>
      </center>
      

 
    

    </div>
    </div>
    </div>
</div>

);


}export default College;
 