import { useEffect, useState ,Link } from "react";
import { useHistory } from 'react-router-dom';

const Courseup = () => {
    const history=useHistory();
    const [data, setdata] = useState(null)
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/courseshow')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setdata(data);
            console.log(data);
          })
      }, [])
      const handleclick=(e)=>{
        //console.log(e.target.value);
        history.push("/Courseup2/"+e.target.value);
    }
    if(data != null &&data.length===0)
    {
        return(
            <div className="te">
                <h1>No Results</h1>
            </div>
        );

    }
    return (
        <div className="clist">
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