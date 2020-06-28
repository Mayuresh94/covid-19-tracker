import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import BuyMeKoFi from './buy-me-ko-fi.png';


function Footer() {

  return (

    <Navbar className="justify-content-between" sticky="bottom" expand="lg" variant="dark" style={{background: "black"}}>

          <Navbar.Text style={{margin: "10px"}}>
          &#169; Copyright 2020
          </Navbar.Text>

          <Navbar.Text style={{margin: "10px"},{color: "white"}}>
          Designed & Developed By <b>Mayuresh Kutte</b>
          </Navbar.Text>

          <div className="mr-sm-4" style={{margin: "5px"}}>
          <a href="https://www.linkedin.com/in/mayuresh-kutte-13a301a5/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>

          <a href="https://ko-fi.com/mayuresh94#" className="youtube social" target="_blank" rel="noopener noreferrer">
            <img src={BuyMeKoFi} alt="Buy me Ko-fi" style={{marginLeft: "5px"}}></img>
          </a>
          </div>
    </Navbar>

  )
}

export default Footer
