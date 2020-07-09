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
    <div className="container">
    <div className="row">
    <div className="col-sm-3"></div>
    <div className="col-sm-6" style={{textAlign:"center", margin:"25px"}}>
    <h6>visitor counter</h6>
    <img src="https://hitwebcounter.com/counter/counter.php?page=7540521&style=0006&nbdigits=6&type=page&initCount=0" title="Web Counter" Alt="counter free"   border="0" >
    </img>
    </div>
    <div className="col-sm-3"></div>
    </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Home;
