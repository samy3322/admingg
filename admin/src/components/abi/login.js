import { useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const Login = () => {
    const history = useHistory();
    const [dat, setdata] = useState(1)
    const [email, setid] = useState(null)
    const [password, setpass] = useState(null)
    
    const login= async (e)=>{
        e.preventDefault();
        const data={email,password}
        console.log(data,e)
     await axios.post('http://localhost:8000/api/adminlogin',data)
      .then(res => {
        console.log('response', res);
        if(res.data===1)
        {
            history.push("/nextpage");
        }else{
            setdata(0);
        }
      })
      .catch(e => { 
        console.error('Failure', e);

      });
         
    };
 return (  
        <div className="container">
            
            <label htmlFor="">Username</label>
            <input type="text" required  onChange={(e) =>setid(e.target.value)  }/><br/>
            <label htmlFor="">Password</label>
            <input type="password" required  onChange={(e) =>setpass(e.target.value)  }/><br/>
            { !dat && <div className="pending">
       <h4> Invalid Credentials</h4>
      </div>}
            <button type="submit" onClick={(e) => login(e)} >ADD</button>
        </div>
    );
}
 
export default Login;