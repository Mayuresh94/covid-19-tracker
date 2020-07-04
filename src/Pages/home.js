import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStats from '../global-stats/global-stats'
import CountrySpecificStats from '../country-specific-stats/country-specific-stats'
import Footer from '../footer/footer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Precaution from '../precautions/precaution'



function Home() {


  return (

    <div className="App" style={{background:"#e6f2ff"}} >
    <GlobalStats/>
    <CountrySpecificStats/>
    <Precaution />
    <Footer/>
    </div>
  );
}

export default Home;
