import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStats from '../global-stats/global-stats'
import CountrySpecificStats from '../country-specific-stats/country-specific-stats'
import Footer from '../footer/footer'
import Header from '../header/header'



function Home() {


  return (

    <div className="App" style={{background : "#D7CEC7"}} >
    <Header/>
    <GlobalStats/>
    <CountrySpecificStats/>
    <div className="row" style={{height:"25vh"}}>
    <div className="col-sm-12"></div>
    </div>
    <Footer/>
    </div>
  );
}

export default Home;
