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
    
    <Table striped bordered hover>
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
            <td>Abhijit Paul</td>
            <td>bsse1201@iit.du.ac.bd</td>
            <td>Dr. Zerina Begum</td>
        </tr>
        <tr>
            <td>1203</td>
            <td>Abhijit Paul</td>
            <td>bsse1201@iit.du.ac.bd</td>
            <td>Dr. Zerina Begum</td>
        </tr>
        <tr className={classes.gap}>
            <td>1204</td>
            <td>Abhijit Paul</td>
            <td>bsse1201@iit.du.ac.bd</td>
            <td> </td>
        </tr>
        <tr>
            <td>1205</td>
            <td>Abhijit Paul</td>
            <td>bsse1201@iit.du.ac.bd</td>
            <td>Dr. Zerina Begum</td>
        </tr>
        <tr>
            <td>1206</td>
            <td>Abhijit Paul</td>
            <td>bsse1201@iit.du.ac.bd</td>
            <td>Dr. Zerina Begum</td>
        </tr>
      </tbody>
    </Table>
    </>
  );
}

export default MyTable2;
