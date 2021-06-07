import { useEffect, useState ,Link } from "react";
import { useHistory } from 'react-router-dom';

const Delcourse = () => {
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
        const id=e.target.value;
        //e.preventDefault();
        const detail = {};
        const confirmbox =window.confirm("do you really want to delete this record");
        if(confirmbox=== true){
        fetch('http://127.0.0.1:8000/api/coursedelete/'+id, {
          method: 'DELETE',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(detail)
          
        }).then(() => {
          console.log('Deleted');
          alert("Course Deleted")
    })
    }}
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
          <button onClick={(e) => handleclick(e,"value")} value={dat.course_id}>deletecourse</button>
        </div>
      ))}
    </div>
      );
}
 
export default Delcourse;