import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


function Footer() {

  return (

    <Navbar className="justify-content-between" sticky="bottom" expand="lg" variant="dark" style={{background: "black"}}>
          <Navbar.Text style={{margin: "10px", color: "white"}}>
          Designed & Developed By <b>Mayuresh Kutte</b>
          <br/>
          #StayHome #StaySafe
          </Navbar.Text>

          <Navbar.Text style={{margin: "10px"}}>
          &#169; Copyright 2020
          </Navbar.Text>



          <div className="mr-sm-4" >
          <div style={{marginLeft:"5px"}}>
          <a href="https://www.linkedin.com/in/mayuresh-kutte-13a301a5/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          </div>
          <div>
          <a href="https://www.buymeacoffee.com/mayuresh94" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.buymeacoffee.com/buttons/default-black.png" alt="Buy Me A Coffee"
          style={{height: "45px",width: "200px"}} >
          </img></a>
          </div>
          </div>
    </Navbar>
  )
}

export default Footer
