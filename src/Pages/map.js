import React from 'react';
import './map.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Footer from '../footer/footer'

function Map() {

  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">COVID-19 Live Status</Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href="/">Home</Nav.Link>
    </Nav>
    </Navbar>

    <div className="google-map-code holds-the-iframe" >
          <iframe title="map" src="https://maps.mapmyindia.com/corona" width="1360" height="590" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0">

          </iframe>
        </div>
        <Footer/>
        </div>

  )

}

 export default Map;
