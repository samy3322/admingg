import { useEffect, useState ,Link } from "react";
import { useHistory } from 'react-router-dom';
import SearchField from "react-search-field";
import axios from 'axios';
const Courseup = () => {
    const history=useHistory();
    const [data, setdata] = useState(null)
    const [ispending, setispending] = useState(true);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/courseshow')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setdata(data);
            console.log(data);
            setispending(false);
          })
      }, [])
      const handlesearch=(e)=>{
        setispending(true);
        axios.get(`http://127.0.0.1:8000/api/searchcourse/`+e)
        .then(res => {
            setdata(res.data);
            setispending(false);})
      }
      const handleclick=(e)=>{
        //console.log(e.target.value);
        history.push("/Courseup2/"+e.target.value);
    }
    return (
        <div className="clist">
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
        <div className="litview" key={dat.course_id} >
          <h2>Course Name  { dat.course }</h2>
          <p> Stream  { dat.stream }</p>
          <button onClick={(e) => handleclick(e,"value")} value={dat.course_id}>Edit</button>
        </div>
      ))}
    </div>
      );
}
 
export default Courseup;