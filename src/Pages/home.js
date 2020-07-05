import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStats from '../global-stats/global-stats'
import CountrySpecificStats from '../country-specific-stats/country-specific-stats'
import Footer from '../footer/footer'
import Precaution from '../precautions/precaution'
import Header from '../header/header'



function Home() {


  return (

    <div className="App" style={{background:"#e6f2ff"}} >
    <Header/>
    <CountrySpecificStats/>
    <GlobalStats/>
    <Precaution />
    <Footer/>
    </div>
  );
}

export default Home;
