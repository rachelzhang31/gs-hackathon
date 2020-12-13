import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { RiVirusFill } from 'react-icons/ri'
import './Navbar.css';
import { IconContext } from 'react-icons/lib'
import { render } from '@testing-library/react';

import Paper from '@material-ui/core/Paper';

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
        <Paper className="navbar" elevation = {10} style = {{background: '#64A8F0', borderRadius: 0}}>
          <div className="navbar-container container">
            <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
              <RiVirusFill className='navbar-icon'/>
              COVID-19 Insights
              </Link> 
              <div className="menu-icon" onClick = {handleClick}>
                {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Overview
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/unemployment" className="nav-links" onClick={closeMobileMenu}>
                Unemployment
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/global" className="nav-links" onClick={closeMobileMenu}>
                Global
                </Link>
                </li>
                <li className = 'nav-item'>
              <Link to="/caserates" className="nav-links" onClick={closeMobileMenu}>
                Case Rates
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mortalityrates" className="nav-links" onClick={closeMobileMenu}>
                Mortality Rates
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
      
          </ul>
          </div>
        </Paper>
        </IconContext.Provider>
      </>
    );
  }


export default Navbar
