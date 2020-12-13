import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { RiVirusFill } from 'react-icons/ri'
import './Navbar.css';
import { IconContext } from 'react-icons/lib'
import { render } from '@testing-library/react';

function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const [button, setButton] = useState(true)
  const closeMobileMenu = () => setClick(false)
  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false)
    } else{
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  },[]);
  window.addEventListener('resize', showButton);

    return (
      <>
      <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
              <RiVirusFill className='navbar-icon'/>
              COVID-19 and Unemployment in the US
              </Link> 
              <div className="menu-icon" onClick = {handleClick}>
                {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/caserates" className="nav-links" onClick={closeMobileMenu}>
                Case Rates
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
      
          </ul>
          </div>
        </div>
        </IconContext.Provider>
      </>
    );
  }


export default Navbar
