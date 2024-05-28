import React from "react";
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
  

  return(
    <>        
    <div className="header">
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
      </div> 
    </>

  )
}

export default Header;