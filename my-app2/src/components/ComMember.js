import React, { useState, useEffect } from "react";
import AdminNav from "./AdminNav";
import StuProfile from "./StuProfile";
import classes from "../styles/ComMember.css";

function MyTable1() {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     // Fetch data from the database
  //     const fetchData = async () => {
  //       const response = await fetch('https://my-database.com/data');
  //       const data = await response.json();
  //       setData(data);
  //     };
  //     fetchData();
  //   }, []);

  const [text, setText] = useState("");

  const handleSend = () => {
    // Call a function or send the text directly to another component
    // In this example, we're sending it to the OtherComponent component
    return <StuProfile text={text} />;
  };

  return (
    <>
      <AdminNav />
      <div class="card w-75">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
   
  </div>
</div>

      

      <div>
        {/* <textarea value={text} onChange={(e) => setText(e.target.value)} /> <br/> */}
        <form>
        <input
          type="text"
          className="form-control"
          id="TextInput"
          placeholder="Type notice..."
          name="Text "
        />
        <br/>
        <button classNameName="btn btn-info" onClick={handleSend}> 
          Send Notice
        </button>

        </form>
        

        
      </div>
    </>
  );
}
export default MyTable1;
