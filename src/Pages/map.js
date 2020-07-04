import React from 'react';
import Iframe from 'react-iframe'
import '../App.css'
import {Link} from "react-router-dom";
import './map.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Map() {

  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">COVID-19 Live Status</Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href="/">Home</Nav.Link>
    </Nav>
    </Navbar>

    <div className="google-map-code" >
          <iframe src="https://maps.mapmyindia.com/corona" width="1360" height="590" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        </div>

  )

}

 export default Map;
