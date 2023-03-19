import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import AdminNav from "./AdminNav";
import classes from '../styles/SplTwo.module.css';

function MyTable2() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   // Fetch data from the database
  //   const fetchData = async () => {
  //     const response = await fetch('https://my-database.com/data');
  //     const data = await response.json();
  //     setData(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <AdminNav />

      <Table striped bordered hover  >
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Roll</th>
            <th>Name</th>
            <th>Email</th>
            <th>SPL-2 Supervisor</th>
          </tr>
        </thead>
        <tbody  >
          {/* {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.age}</td>
          </tr>
        ))} */}

          <tr >
            <td  rowSpan="2" >Team One</td>
            <td>1202</td>
            <td>Mashiat</td>
            <td>bsse1202@iit.du.ac.bd</td>
            <td rowSpan="2">Dr. Zerina Begum</td>
          </tr>
          <tr >
            <td>1222</td>
            <td>Araf</td>
            <td>bsse1222@iit.du.ac.bd</td>
          </tr>

          <tr >
            <td rowSpan="2">Team Two</td>
            <td>1201</td>
            <td>Abhijit Paul</td>
            <td>bsse1201@iit.du.ac.bd</td>
            <td rowSpan="2">Dr. Zerina Begum</td>
          </tr>
          <tr >
            <td>1210</td>
            <td>Rakibul</td>
            <td>bsse1210@iit.du.ac.bd</td>
            
          </tr>
          <tr className={classes.gap} >
            <td rowSpan="2">Team Five</td>
            <td>1206</td>
            <td>Galib</td>
            <td>bsse1206@iit.du.ac.bd</td>
            <td rowSpan="2"> </td>
          </tr>
          <tr >
            <td>1256</td>
            <td>Rashik</td>
            <td>bsse1256@iit.du.ac.bd</td>
            
          </tr>

          <tr >
            <td rowSpan="2">Team Three</td>
            <td>1206</td>
            <td>Galib</td>
            <td>bsse1206@iit.du.ac.bd</td>
            <td rowSpan="2">Kishan Kumar Ganguly</td>
          </tr>
          <tr >
            <td>1256</td>
            <td>Rashik</td>
            <td>bsse1256@iit.du.ac.bd</td>  
          </tr>


        </tbody>
      </Table>
    </>
  );
}

export default MyTable2;
