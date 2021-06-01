import { useEffect, useState ,Link } from "react";
import { useHistory } from 'react-router-dom';
const Blkcmp = () => {

  const history=useHistory();
  const [data, setdata] = useState(null)
  useEffect(() => {
      fetch('http://127.0.0.1:8000/api/showunblockcomp')
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

      fetch('http://127.0.0.1:8000/api/compblock/'+e.target.value, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(detail)
        
      }).then(response => response.json())
       .then(data => console.log(data));
        alert("Company Blocked")
        window.location.reload();
        //history.push("/unblkcmp");
  }
  return (
      <div className="clist">
    {data && data.map(dat => (
      <div className="litview" key={dat.com_id} >
        <h2>Company Name  { dat.comp_name }</h2>
        <p> Email  { dat.cemail }</p>
        <p> Phone  { dat.cphone }</p>
        <button onClick={(e) => handleclick(e,"value")} value={dat.com_id}>Block</button>
      </div>
    ))}
  </div>
    );
}
 
export default Blkcmp;