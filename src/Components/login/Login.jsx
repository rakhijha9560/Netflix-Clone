import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import {Link, NavLink} from 'react-router-dom';
import Footer from "../Footer/Footer";

export const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
        localStorage.setItem("loggedin", true);
        navigate("/home");
    }else{
        alert("invalid email or password!");

    }
  };
  return (
    <>
    <div className="container">
    <div className="navbar-heading">
    <Link className="navbar-brand" to="/">
            <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
          </Link>
        </div>
        <div className="login-form-container">
          <div className="login-form">
      <form onSubmit={handleLogin}>
        <input
        className="box-1"
          placeholder="Email or phone number..."
          type="email"
          name="email"
          value={input.email}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
        

        <input
        className="box-1"
          placeholder="Password..."
          type="password"
          name="password"
          value={input.password}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />

     
        <button>login</button>
      </form>
      <div className="account-query">
        <p>Do not have an account? <span><Link  ><NavLink to="/register"   style={{ color: "#fff"}}>Register here</NavLink></Link></span></p>
      </div>
      </div>
      </div>
      <Footer />
      </div>
    
    </>
  );
};

export default Login;
