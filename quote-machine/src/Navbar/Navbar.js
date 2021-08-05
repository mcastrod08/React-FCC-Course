import React from "react";
import "./Navbar.css";
import logoMC from "../logoMC.png";

function Navbar(props) {
	return (

		<header id="header">
	    <div className="logo">
			  <img id="header-img" src={logoMC} alt="Maria Castro Logo" />
			</div>
	    <nav id="nav-bar">
				<ul>
	        <li>Quote Machine Exercise</li>
	      </ul>
			</nav>
	</header>
	)
}


export default Navbar;
