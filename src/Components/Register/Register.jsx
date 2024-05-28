import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { database } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const RegisterComponent = () => {

  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
//to store value in localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
   localStorage.setItem("user", JSON.stringify(input))
   navigate("/login");
  };

  return (
    <div>
      <div className="SignIn-container">
        <div className="navbar-heading">
        <Link className="navbar-brand" to="/">
            <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
          </Link>
        </div>
        <div className="sign-up-box-container">
          <div className="sign-up-box">
            <div className="header">
              <h1>Create an account</h1>
            </div>
            <form onSubmit={ handleSubmit}>
              <div className="box-1">
                <input
                  placeholder="Name..."
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <div className="box-2">
                <input
                  placeholder="Email or phone number..."
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                />
              </div>

              <div className="box-3">
                <input
                  placeholder="Password..."
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <div className="btn-1">
                <button type="submit">register</button>
              </div>
            </form>
            <div className="OR-box">
              <p>OR</p>
            </div>
            <div className="btn-2">
              <button>
                <NavLink to="/login" className="inactive">
                  login here
                </NavLink>
              </button>
            </div>
            <div className="forget-password">
              <h6>Forgot password?</h6>
            </div>
            <div className="check-apply">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
            </div>
          </div>
        </div>

       <Footer />
      </div>
    </div>
  );
};

export default RegisterComponent;
