import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import AdminNav from './AdminNav';
import classes from '../styles/SplOne.module.css';

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
    <AdminNav/>
    <br/><br/>
    <button className="btn btn-primary" style={{marginLeft:"15px"}} >
                      SPL-1 Randomization
                    </button><br/><br/>
    
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>Roll</th>
          <th>Name</th>
          <th>Email</th>
          <th>SPL-1 Supervisor</th>
        </tr>
      </thead>
      <tbody className={classes.body}>
        {/* {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.age}</td>
          </tr>
        ))} */}

        <tr>
            <td>1201</td>
            <td>Abhijit Paul</td>
            <td>bsse1201@iit.du.ac.bd</td>
            <td>Dr. Zerina Begum</td>
        </tr>
        <tr>
            <td>1202</td>
            <td>Mashiat Farin</td>
            <td>bsse1202@iit.du.ac.bd</td>
            <td>Ahmedul Kabir</td>
        </tr>
        <tr>
            <td>1203</td>
            <td>Sazzad Hossain</td>
            <td>bsse1203@iit.du.ac.bd</td>
            <td>Abdus Sattar</td>
        </tr>
        <tr>
            <td>1204</td>
            <td>Istiaq Fahada</td>
            <td>bsse1204@iit.du.ac.bd</td>
            <td>Abdus Sattar</td>
        </tr>
        <tr>
            <td>1205</td>
            <td>Tasnia Esha</td>
            <td>bsse1205@iit.du.ac.bd</td>
            <td>Dr. Kazi-Muheymin-Us-Sakib</td>
        </tr>
        <tr>
            <td>1206</td>
            <td>Sahed Galib</td>
            <td>bsse1206@iit.du.ac.bd</td>
            <td>Kishan Kumar Ganguly</td>
        </tr>
        <tr>
            <td>1207</td>
            <td>Sazzad Hossain</td>
            <td>bsse1207@iit.du.ac.bd</td>
            <td>Dr.Shafiul Alam Khan</td>
        </tr>
        <tr>
            <td>1208</td>
            <td>Rupali Tasnim</td>
            <td>bsse1208@iit.du.ac.bd</td>
            <td>Dr. B M Mainul Hossain</td>
        </tr>
        <tr>
            <td>1209</td>
            <td>Sakib Al Hasan</td>
            <td>bsse1209@iit.du.ac.bd</td>
            <td>Dr. Zerina Begum</td>
        </tr>
        <tr>
            <td>1210</td>
            <td>Md. Rakibul Islam</td>
            <td>bsse1210@iit.du.ac.bd</td>
            <td>Dr. Dr. Ahmedul Kabir</td>
        </tr>
        <tr>
            <td>1211</td>
            <td>Rifah Tashifia</td>
            <td>bsse1211@iit.du.ac.bd</td>
            <td>Dr. Suman Ahmed</td>
        </tr>
      </tbody>
    </Table>
    </>
  );
}

export default MyTable2;
