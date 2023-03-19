import React from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const login_btn_clicked2 = () => {
    // Check with database
    nav("/admin");
  };
  return (
    <form action="">
      <div className="contaner bg-success-subtle">
        <div className="box shadow p-3 mb-5 bg-info rounded">
          <div class="form-group my-3">
            <label for="EmailInput">
              <strong>Email:</strong>{" "}
            </label>
            <input
              type="email"
              class="form-control"
              id="EmailInput"
              placeholder="Enter Email"
              name="Email"
            />
          </div>
          <div class="form-group my-3">
            <label for="PasswordInput">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              class="form-control"
              id="PasswordInput"
              placeholder="Enter Password"
              name="Password"
            />
          </div>
          <center>
            <a href="/recovery_password" style={{ color: "blue" }}>
              Forgot Password?
            </a>{" "}
            <br />
            <br />
            <input
              className="btn btn-outline-light"
              type="submit"
              value="Login"
              onClick={login_btn_clicked2}
            />
          </center>
        </div>
      </div>
    </form>
  );
}
