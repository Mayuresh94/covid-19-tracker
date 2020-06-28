import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStats from './global-stats/global-stats'
import CountrySpecificStats from './country-specific-stats/country-specific-stats'
import Footer from './footer/footer'
import Container from 'react-bootstrap/Container'

const mystyle={
  background: 'linear-gradient(to right, #833ab4, #fcb045)',
  height: 'auto',
}

function App() {


  return (

    <div className="App" style={mystyle} >

    <GlobalStats/>
    <CountrySpecificStats/>
    <Container fluid>
    <div className="row" style={{height: "40vh"}}>
    <div className="col-sm-12"></div>
    </div>
    </Container>
    <Footer/>

    </div>
  );
}

export default App;
