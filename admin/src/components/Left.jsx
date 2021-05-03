import React, {Component} from 'react';
import {Form,Button, Container} from 'react-bootstrap';
import Menu from "./Menu"

/*function Reg()
{
    const[name,setName]=useState("")
    const[password,setPassword]=useState("") 
    const history=useHistory();
*/


export default class Left extends Component {

  constructor()
    {
        super();
        this.state={
            
            email:"",
            password:"",
            valid:"",
        }
    }
    valid()        
     {   
        console.log(this.state)
        fetch('http://127.0.0.1:8000/api/adminlogin',
        {
        method:'post',
        
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },body:JSON.stringify(this.state),
        }).then(res=>{
            return res.json();
    
            }).then(data=>{
                this.setState({valid:data})
                console.log(data)
            })
       

            if(this.state.valid===1)
            { ( document.location.href="Main") } 
            

    }

render()
{
  
 return(
      
<div >                
<Menu />
    <Container>  
   
<Form style={{ width:"50%", marginTop:"12%",marginLeft:"32%"}} >

<Form.Group controlId="formBasicName">
<Form.Label>Username</Form.Label>
<Form.Control 
type="text" 
placeholder="Enter Username" 
onChange={(event)=>{this.setState({email:event.target.value})}}
style={{width:"70%"}}/>


<Form.Text className="text-muted">Don't share Username and Password</Form.Text>
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control  
type="password" 
placeholder="Password" 
onChange={(event)=>{this.setState({password:event.target.value})}}
style={{width:"70%"}}/>
</Form.Group>


<Button variant="dark" onClick={()=>this.valid()}>Login </Button>
<div>
{this.state.valid===0 &&<p>email or password is incorrect </p> } 
</div>
</Form>

</Container>
        </div>

 );
}
}












    
 
  /*  
async function signup()
{
    let item={name,email,password}
    console.warn(item)
    let result=await fetch("http://127.0.0.1:8000/api/register",{
        method:'post',
        body:JSON.stringify(item),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
}
    })
    result= await result.json()
    localStorage.setItem("user-info",JSON.stringify(result))
    alert("User REGISTERD"); 
    history.push("/Login")
}
return(
 
    <div>
        <Header/>
    <link rel="stylesheet" href="form.css"/>
            
           
           
    <div className="form">
 
        <center>
  
        <h1 className="head1">REGISTER</h1><br/>
        <br/>
        <br/>
  <input type="text"   placeholder=" ENTER THE COLLEGE NAME"  onChange={(e)=>setName(e.target.value)}/><br/>
 
          <input type="email"  placeholder="EMAIL" onChange={(e)=>setEmail(e.target.value)} /><br/>
        <input type="password"  placeholder="PASSWORD"onChange={(e)=>setPassword(e.target.value)}/>
 
        <br/>
        <Button  onClick={signup}>submit</Button>
        <p>already login</p><br/><a href="Login">LOGIN</a>
        </center>
<footer className="head1">
 
    <center>
    <h1>FIND YOURE FUTURE HERE</h1>
    </center>
  
    </footer>
    </div>
    </div>
 
);
 
}export default Reg;*/