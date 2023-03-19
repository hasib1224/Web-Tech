import React from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import StuNav from "./StuNav";

export default function EditInfo() {
  const nav = useNavigate();
  const login_btn_clicked2 = () => {
    // Check with database
    nav("/stuProfile");
  };
  return (
    <>
    <StuNav/>
   

    <form style={{fontSize:"large"}}>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputName">Password</label>
      <input type="text" class="form-control" id="inputName" placeholder="Name"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Project Idea</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Share Idea..."/>
  </div>
  {/* <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>

  </div> */}
  

<button className="btn btn-outline-light" type="submit" class="btn btn-primary" onClick={login_btn_clicked2}>Submit</button>
</form>

</>
    
  );
}
