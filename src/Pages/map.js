import React from 'react';
import './map.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Footer from '../footer/footer'
import useGeolocation from 'react-hook-geolocation'

function Map() {

  const ComponentWithGeolocation = () => {
  const geolocation = useGeolocation()

  return !geolocation.error
    ? (
      <ul>
        <li>Latitude:          {geolocation.latitude}</li>
        <li>Longitude:         {geolocation.longitude}</li>
        <li>Location accuracy: {geolocation.accuracy}</li>
        <li>Altitude:          {geolocation.altitude}</li>
        <li>Altitude accuracy: {geolocation.altitudeAccuracy}</li>
        <li>Heading:           {geolocation.heading}</li>
        <li>Speed:             {geolocation.speed}</li>
        <li>Timestamp:         {geolocation.timestamp}</li>
      </ul>
    )
    : (
      <p>No geolocation, sorry.</p>
    )
}

  return (

    <div>

    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">COVID-19 Tracker</Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href="/">Home</Nav.Link>
    </Nav>
    </Navbar>
    <div className="google-map-code holds-the-iframe" >

          <iframe title="map" src="https://www.bing.com/covid" width="1360" height="590" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0">
          {ComponentWithGeolocation}
          </iframe>
        </div>
        <Footer/>
        </div>

  )

}

 export default Map;
