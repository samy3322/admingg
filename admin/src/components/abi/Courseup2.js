import { useParams } from "react-router";
import { useEffect, useState ,Link } from "react";
import { useHistory } from 'react-router-dom';

const Courseup2 = () => {
  
    const {id}=useParams();
    const history=useHistory();
    const [data, setdata] = useState(null);
    const [ispending, setispending] = useState(true);
    const [course, setcourse] = useState(null);
    const [stream, setstream] = useState(null);
    const [after, setafter] = useState(null);
    const [duration, setduration] = useState(null);
    const [type, settype] = useState(null);
    const [about, setabout] = useState(null);
    const [exam_type, setexam_type] = useState(null);
    const [eligibility, seteligibility] = useState(null);
    const [recruitment, setrecruitment] = useState(null);
    const [jobs, setjobs] = useState(null);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/coursedisplay/'+id)
          .then(res => {
            return res.json();
          })
          .then(data => {
            setdata(data);
            setispending(false);
            console.log(data.course);
            setcourse(data.course);
            setstream(data.stream);
            setafter(data.after);
            setduration(data.duration);
            settype(data.type);
            setabout(data.about);
            setexam_type(data.exam_type);
            seteligibility(data.eligibility);
            setrecruitment(data.recruitment);
            setjobs(data.jobs); 
          })
        
        //{setispending && setcourse(data.course);}
         
      }, [])
      
      const handleSubmit = (e) => 
      {
        e.preventDefault();
        const detail = { course,stream,after,duration,type,about,exam_type,eligibility,recruitment,jobs};

        fetch('http://127.0.0.1:8000/api/courseupdate/'+id, {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(detail)
          
        }).then(() => {
          console.log('Updated');
          alert("course Updated")
    })
       
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
     
        <div id ="Courseup2"className="update">
           {ispending && <div className="pending">
        Loading....
      </div>}
            <h1>Update</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Course</label>
                <input type="text" required value={course} onChange={(e) => setcourse(e.target.value)} /><br/>
                <label htmlFor="">Stream</label>
                <input type="text" required value={stream} onChange={(e) => setstream(e.target.value)} /><br/>
                <label htmlFor="">After</label>
                <input type="text" required value={after} onChange={(e) => setafter(e.target.value)} /><br/>
                <label htmlFor="">duration</label>
                <input type="number" required value={duration} onChange={(e) => setduration(e.target.value)} /><br/>
                <label htmlFor="">type</label>
                <input type="text" required value={type} onChange={(e) => settype(e.target.value)} /><br/>
                <label htmlFor="">about</label>
                <input type="text" required value={about} onChange={(e) => setabout(e.target.value)} /><br/>
                <label htmlFor="">exam_type</label>
                <input type="text" required value={exam_type} onChange={(e) => setexam_type(e.target.value)} /><br/>
                <label htmlFor="">eligibility</label>
                <input type="text" required value={eligibility} onChange={(e) => seteligibility(e.target.value)} /><br/>
                <label htmlFor="">recruitment</label>
                <input type="text" required value={recruitment} onChange={(e) => setrecruitment(e.target.value)} /><br/>
                <label htmlFor="">jobs</label>
                <input type="text" required value={jobs} onChange={(e) => setjobs(e.target.value)} /><br/>
                <button onClick={(e) => handleSubmit(e)}>Update</button>
            </form>
        </div> 
        
     );
}
// stream
// after
// duration
// type
// about
// exam_type
// eligibility
// recruitment
// jobs
export default Courseup2;