import { useEffect, useState ,Link } from "react";
import { useHistory } from 'react-router-dom';
const Unblkcmp = () => {

  const history=useHistory();
  const [data, setdata] = useState(null)
  useEffect(() => {
      fetch('http://127.0.0.1:8000/api/showblockcomp')
        .then(res => {
          return res.json();
        })
        .then(data => {
          setdata(data);
          console.log(data);
        })
    }, [])
    const handleclick=(e)=>{
      
      const detail = { };

      fetch('http://127.0.0.1:8000/api/compunblock/'+e.target.value, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(detail)
        
      }).then(response => response.json())
       .then(data => console.log(data));
        alert("Company UnBlocked")
        history.push("/unblkcmp");
        window.location.reload();
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
      <div className="litview" key={dat.com_id} >
        <h2>Company Name  { dat.comp_name }</h2>
        <p> Email  { dat.cemail }</p>
        <p> Phone  { dat.cphone }</p>
        <button onClick={(e) => handleclick(e,"value")} value={dat.com_id}>UnBlock</button>
      </div>
    ))}
  </div>
    );
}
 
export default Unblkcmp;