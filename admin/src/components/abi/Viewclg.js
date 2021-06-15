import axios from 'axios';
import { useEffect, useState ,Link } from "react";
import { useParams } from "react-router";
import SearchField from "react-search-field";
import { useHistory } from 'react-router-dom';
const Viewclg = () => {
    const {id}=useParams();
    const [data, setdata] = useState(null)
    const [data1, setdata1] = useState(null)
    const [ispending, setispending] = useState(true);
    const [isactuve, setactive] = useState(true);
    useEffect(() => {
          axios.get(`http://127.0.0.1:8000/api/clgshow/`+id)
          .then(res => {
             // console.log(res.data);
              setdata(res.data);
              setispending(false);})
              axios.get(`http://127.0.0.1:8000/api/clgcourse/`+id)
          .then(res => {
            setispending(true);
              console.log(res.data);
              setdata1(res.data);
              setispending(false);})
        }, []);




    return ( 

        <div className="main">
             {ispending && <div className="pending">
        Loading....
      </div>}
            <h2>view college</h2>
            
                
       { data && <div className="preview" key={data.c_no} >
          <h2>college name{ data.c_name }</h2>
          <p>location { data.clocation }</p>
          <p>adrees {data.caddress}</p>
          <p>contact number{data.cno1},{data.cno2}</p>
          <p>Email{data.cemail_id}</p>
          <p>About{data.About}</p>
          <p>Faculty{data.faculty}</p>
          <p>Average{data.average}</p>
        <p>Affilated to{data.affiliated_to}</p>
        <a href={'http://localhost/project/Backend/findyourfuture/storage/app/'+ data.certificate }>file downlod</a>
        </div>}
        <div className="course">
        <h3>Courses offered</h3>
        {ispending && <div className="pending">
        Loading....
      </div>}
      {data1 &&!data1.length&& <div className="nores"><h5>No Courses Available</h5></div>
      }
        {data1 && data1.map(dat => (
     <p>{dat.course}</p>
    ))}
        </div>
        </div>
     );
}
 
export default Viewclg;