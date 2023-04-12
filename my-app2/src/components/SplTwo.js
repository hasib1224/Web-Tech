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

          <tr >
            <td  rowSpan="2" >Team Four</td>
            <td>1224</td>
            <td>Hasib Abdullah</td>
            <td>bsse1224@iit.du.ac.bd</td>
            <td rowSpan="2">Moumita Asad</td>
          </tr>
          <tr >
            <td>1255</td>
            <td>Md. JUbaer</td>
            <td>bsse1255@iit.du.ac.bd</td>
          </tr>

          <tr >
            <td  rowSpan="2" >Team Five</td>
            <td>1212</td>
            <td>Abdullah Momin</td>
            <td>bsse1212@iit.du.ac.bd</td>
            <td rowSpan="2"> Dr. Suman Ahmed </td>
          </tr>
          <tr >
            <td>1209</td>
            <td>MD. Sakib Al Hasan</td>
            <td>bsse1209@iit.du.ac.bd</td>
          </tr>

          <tr className={classes.gap} >
            <td rowSpan="2">Team Six</td>
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
            <td  rowSpan="2" >Team Seven</td>
            <td>1220</td>
            <td>Sifat Sikder</td>
            <td>bsse1220@iit.du.ac.bd</td>
            <td rowSpan="2"> Dr. Suman Ahmed </td>
          </tr>
          <tr >
            <td>1205</td>
            <td>Tasnia Esha</td>
            <td>bsse1205@iit.du.ac.bd</td>
          </tr>

          <tr >
            <td  rowSpan="2" >Team Eight</td>
            <td>1203</td>
            <td>Sazzad Hossain</td>
            <td>bsse1203@iit.du.ac.bd</td>
            <td rowSpan="2"> Dr. B M Mainul Hossain </td>
          </tr>
          <tr >
            <td>1233</td>
            <td>Mehzabin Haque</td>
            <td>bsse1233@iit.du.ac.bd</td>
          </tr>


        </tbody>
      </Table>
    </>
  );
}

export default MyTable2;
