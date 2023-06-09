import companyLogo from "../../assets/shared/logo.svg";
import iconHumburger from "../../assets/shared/icon-hamburger.svg";
import iconClose from "../../assets/shared/icon-close.svg";
import {NavLink} from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [Toggle, setToggle] = useState(0);

  function toggle() {
   let t=!Toggle;
    setToggle(!Toggle)
    if(t===false)
      document.querySelector(".nav-links").classList.add("d-none");
    else
     document.querySelector(".nav-links").classList.remove("d-none");
    
  }

  return (
    
      <nav className="nav-bar">
        <div className="logo">
          <img src={companyLogo} alt="companyLogo" />
        </div>

        
          <div className="nav-links d-none">
            <ul>
              <li>
                <NavLink className="nav-link" to="/">
                  <span className="bold-txt">00</span>Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/destination">
                  <span className="bold-txt">01</span>Destination
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/crew">
                  <span className="bold-txt">02</span>Crew{" "}
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/technology">
                  <span className="bold-txt">03</span>Technology
                </NavLink>
              </li>
            </ul>
          </div>
     
       
        {Toggle ?  (
          <button className="nav-btn" onClick={toggle}>
            <img src={iconClose} alt="iconHumburger" />
          </button>)
          :
          (
          <button className="nav-btn" onClick={toggle}>
            <img src={iconHumburger} alt="iconHumburger" />
          </button>
        ) 
        }
      </nav>

  );
}
export default NavBar;
