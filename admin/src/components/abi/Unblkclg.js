import { useEffect, useState ,Link } from "react";
const Unblkclg = () => {
    const [data, setdata] = useState(null)
    const [ispending, setispending] = useState(true);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/showblockclg')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setdata(data);
            setispending(false);
            console.log(data);
          })
      }, [])
      const handleclick=(e)=>{
        const detail = { };
        fetch('http://127.0.0.1:8000/api/clgunblock/'+e.target.value, {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(detail)
          
        }).then(response => response.json())
         .then(data => console.log(data));
          alert("College UnBlocked")
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
        <div className="clg">
             {ispending && <div className="pending">
        Loading....
      </div>}
            {data && data.map(dat => (
                 <div className="ne">
     <h3>college name: {dat.c_name}</h3>
     <p>Email:{dat.cemail_id}</p>
    <p>Certificate:
      <a href={'http://localhost/project/Backend/findyourfuture/storage/app/'+ dat.certificate }>file downlod</a></p>
      <button onClick={(e) => handleclick(e,"value")} value={dat.col_id}>UnBlock</button>
      </div>
    ))}
            
        </div>
    );
}
 
export default Unblkclg;