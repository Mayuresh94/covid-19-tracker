import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">COVID-19 Live Status</Navbar.Brand>
    <Nav className="mr-auto">
    <Link style={{ color:"white", textDecoration: "none"}} to="/map">
   <div><span role="img" aria-label="map" style={{fontSize: 25, marginLeft: "15px" }}>🌏</span></div>
   </Link>
    </Nav>
    </Navbar>
  )
}

export default Header
