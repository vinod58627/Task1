import React, { useState, useEffect } from "react";
import axios from 'axios'


const  Forms = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [data]);
  const thd = data[0];
  const th = thd ? Object.keys(thd) : [];
  const handleEdit=(id)=>{
    alert(` Do you want to Edit this ${id} record`)

  }
  const handleDelete=(id)=>{
    alert(` Do you want to delete this ${id} record`)

  }
  return (
    <div>
      <table className="table table-striped border-primary" style={{width: '95%'}}>
        <thead className="bg-dark text-light">
          <tr>
            {
            th.map((res) => (
              <th key={res}>{res}</th>
            ))
            }
          </tr>
        </thead>
        <tbody>
          {data.map((res, i) => {
            return (
              <tr key={i} >
                <td>{res.id}</td>
                <td>{res.name}</td>
                <td>{res.username}</td>
                <td>{res.email}</td>
                <td>{res.address.street}</td>
                <td>{res.phone}</td>
                <td>{res.website}</td>
                <td>{res.company.name}<br /><button onClick={()=>handleDelete(res.id)} className="">Delete</button><button onClick={()=>handleEdit(res.id)} className="">Edit</button></td>
               
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Forms;
