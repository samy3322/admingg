import axios from 'axios';
import { useEffect, useState ,Link } from "react";
import SearchField from "react-search-field";
const Searchclg = () => {
    const [data, setdata] = useState(null)
    const [ispending, setispending] = useState(true);
    const [datap, setdatap] = useState(true);
    useEffect(() => {
      console.log("fh")
        axios.get(`http://127.0.0.1:8000/api/cldis`)
        .then(res => {
            //console.log(res);
            setdata(res.data);
            setispending(false);})
      }, []);
      const handlesearch=(e)=>{
        setispending(true);
        axios.get(`http://127.0.0.1:8000/api/searchclg/`+e)
        .then(res => {
            setdata(res.data);
            setispending(false);})
      }
   
     
    return (  
        <div className="clg">
           
      <SearchField
  placeholder="Search..."
  onChange={(e) => handlesearch(e)}
  searchText=""
  classNames=""
/>  {ispending && <div className="pending">
        Loading....
      </div>}
      {data &&!data.length&& <div className="nores"><h3>No Results</h3></div>
      }
            {data && data.map(dat => (
                 <div className="ne">
     <h3>college name: {dat.c_name}</h3>
     <p>Email:{dat.cemail_id}</p>
    <p>Certificate:
      <a href={'http://localhost/project/Backend/findyourfuture/storage/app/'+ dat.certificate }>file downlod</a></p>
      </div>
    ))}
            
        </div>
    );
    
}
 
export default Searchclg;