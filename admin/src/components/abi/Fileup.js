import { useState } from "react";
import axios from 'axios';
const Fileup = () => {
    const [c_name, setc_name] = useState(null);
    const [clocation, setclocation] = useState(null);
    const [caddress, setcaddress] = useState(null);
    const [cno1, setcno1] = useState(null);
    const [cno2, setcno2] = useState(null);
    const [cemail_id, setcemail_id] = useState(null);
    const [about, setAbout] = useState(null);
    const [academic, setacademic] = useState(null);
    const [accommodation, setaccommodation] = useState(null);
    const [faculty, setfaculty] = useState(null);
    const [placement, setplacement] = useState(0);
    const [average, setaverage] = useState(null);
    const [affiliated_to, setaffiliated_to] = useState(null);
    const [certificate, setcertificate] = useState('');
    const submitData= async (e)=>{
        e.preventDefault();
        /*const detail = {c_name,clocation,caddress,cno1,cno2,cemail_id,about,academic,accommodation,faculty,
        placement,average,affiliated_to,certificate};
        console.log(detail);*/
        const fData = new FormData();
        fData.append('c_name',c_name);
        fData.append('clocation',clocation);
        fData.append('caddress',caddress);
        fData.append('cno1',cno1);
        fData.append('cno2',cno2);
        fData.append('cemail_id',cemail_id);
        fData.append('about',about);
        fData.append('academic',academic);
        fData.append('accommodation',accommodation);
        fData.append('faculty',faculty);
        fData.append('placement',placement);
        fData.append('average',average);
        fData.append('affiliated_to',affiliated_to);
        fData.append('certificate',certificate);
        

        await axios
        
      .post('http://localhost:8000/api/clgadd',fData)
      .then(res => {
        console.log('response', res);
      })
      .catch(e => {
        console.error('Failure', e);
      });
         
    };//handle click
   const handleChange=(e)=>
   {
    setcertificate(e[0]);
    console.log(certificate);
    
   }
    return ( 

        <div className="upl">
          {/* <form onSubmit={submitData}> */}
            <h1>clg add</h1>
            <label htmlFor="">c_name</label>
            <input type="text" required value={c_name} onChange={(e) => setc_name(e.target.value)} /><br/>
            <label htmlFor="">clocation</label>
            <input type="text" required value={clocation} onChange={(e) => setclocation(e.target.value)} /><br/>
            <label htmlFor="">caddress</label>
            <input type="text" required value={caddress} onChange={(e) => setcaddress(e.target.value)} /><br/>
            <label htmlFor="">cno1</label>
            <input type="number" required value={cno1} onChange={(e) => setcno1(e.target.value)} /><br/>
            <label htmlFor="">cno2</label>
            <input type="number" required value={cno2} onChange={(e) => setcno2(e.target.value)} /><br/>
            <label htmlFor="">cemail_id</label>
            <input type="email" required value={cemail_id} onChange={(e) => setcemail_id(e.target.value)} /><br/>
            <label htmlFor="">About</label>
            <input type="text" required value={about} onChange={(e) => setAbout(e.target.value)} /><br/>
            <label htmlFor="">academic</label>
            <input type="number" required value={academic} onChange={(e) => setacademic(e.target.value)} /><br/>
            <label htmlFor="">accommodation</label>
            <input type="number" required value={accommodation} onChange={(e) => setaccommodation(e.target.value)} /><br/>
            <label htmlFor="">faculty</label>
            <input type="number" required value={faculty} onChange={(e) => setfaculty(e.target.value)} /><br/>
            
            <label htmlFor="">placement</label>
            <select
          value={placement}
          onChange={(e) => setplacement(e.target.value)}
        >
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select><br />
            <label htmlFor="">average</label>
            <input type="number" required value={average} onChange={(e) => setaverage(e.target.value)} /><br/>
            <label htmlFor="">affiliated_to</label>
            <input type="text" required value={affiliated_to} onChange={(e) =>setaffiliated_to(e.target.value)  }/><br/>
            <label htmlFor="">certificate</label>
            <input type="file" required  onChange={e => handleChange(e.target.files)} /><br/>
            <button type="submit" onClick={(e) => submitData(e)} >ADD</button>
        {/* </form> */}
        </div>
     );
}
 
export default Fileup;



















