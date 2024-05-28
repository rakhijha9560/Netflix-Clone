import React from "react";
import {Link, NavLink} from 'react-router-dom';
import Header from "../Header/Header";


const NetflixInHeaderComponent = () => {

  

  return (
    <div >
      <div className="container">
        <Header />
       {/* <div className="header">
        <div className="heading">
        <Link className="navbar-brand" to="/">
            <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
          </Link>
        </div>
        <div className="heading-buttons">
          <div className="select-btn">
            <select>
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>

          <div className="btn">
            <button><NavLink to="/register" className="inactive" >Sign In</NavLink></button>
          </div>
        </div>
      </div>  */}
  
      <div className="body">
        <div className="body-container">
        <h1>Unlimited movies, TV shows and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>Ready to watch? Enter the given mail Id and enjoy your own company.</h3>
        </div>
        <div className="input-btn-container">
          <div className="input-box">
        <input placeholder="Email address..." type="email" name="userLoginId" />
          </div>
          <div className="button">
            <button><NavLink to="/register"  className="inactive">Get Started</NavLink></button>
          </div> 
       
        </div>
        
      </div>
      </div>
    

      
    </div>
  );
};

export default NetflixInHeaderComponent;
