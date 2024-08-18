import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://i.pinimg.com/736x/66/64/2a/66642a0fc78125531542779aed747508.jpg" /></Link>
                <Link to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></Link>
 
            </div>
        </div>
    )
}

export default Header