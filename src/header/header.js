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
   <div style={{fontSize: 20, marginLeft: "15px" }}><span role="img" aria-label="map" >🌏</span> Map View</div>
   </Link>
    </Nav>
    </Navbar>
  )
}

export default Header
