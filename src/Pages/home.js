import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStats from '../global-stats/global-stats'
import CountrySpecificStats from '../country-specific-stats/country-specific-stats'
import Footer from '../footer/footer'
import Header from '../header/header'



function Home() {


  return (

    <div className="App" style={{background : "#5CDB95"}} >
    <Header/>
    <GlobalStats/>
    <CountrySpecificStats/>
    <Footer/>
    </div>
  );
}

export default Home;
