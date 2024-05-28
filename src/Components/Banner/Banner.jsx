import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("loggedin");
        navigate("/")

    }
    return(
      <div className="banner">
              <div className="heading-button-container">
        <div className="navbar-heading">
    <Link className="navbar-brand" to="/">
            <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
          </Link>
        </div>
        <div className="userName-and-btn-box">
          <div className="user">
    welcome {userName.name}!
    </div>
    <div className="btn">
    <button onClick={handleLogout}>logout</button>
    </div>
    </div>
</div>
        <div className="banner__contents">
  
          <h1 className="banner__title">Ginny &amp; Georgia</h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">
            Angsty and awkward fifteen year old Ginny Miller often feels more
            mature than her thirty year old mother, the irresistible and dynamic
            Georgia Miller...
          </h1>
        </div>
        <div className="banner--fadeBottom"></div>
      </div>
    )
  }
  
  export default Banner;