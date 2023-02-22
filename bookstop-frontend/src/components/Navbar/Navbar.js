import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";
// import { FaAdn, FaBorderAll } from 'react-icons/fa';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" className='logo'/>
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "book" className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "about" className='nav-link'>about</Link>
            </li>
            <li className='nav-item'>
              <Link to = "cart" className='nav-link'>cart</Link>
            </li>
            <li className='nav-item'>
              <button class='fas fa-border-all'><Link to ="" className='nav-link'>Sell Book</Link></button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar