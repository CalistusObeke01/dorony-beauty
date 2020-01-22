import React from "react";
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from './../images/Doronybeauty.png'
import '../App.css';

function Header() {
  return (
    <div>
        <div className="center-navbar">
            <Navbar expand="lg" id="navbar">
                <Navbar.Brand href="/"><img src={Logo} alt="site-logo" width="40" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav">

                        <Link to="/">
                            Home
                        </Link>

                        <Link  to="/products">                                                                                                                                                         
                            Quick Products
                        </Link>

                        <Link  to="/contact"> 
                            Contact
                        </Link>

                    </Nav>
                    
                    <FontAwesomeIcon icon={['fas', 'search']}  style={{zIndex: '1'}} />  
                    <input type="text" placeholder="Search..." aria-label="Search" className="searchInput" />
                </Navbar.Collapse>
            </Navbar>
        </div>
    </div>
  );
}

export default Header;
