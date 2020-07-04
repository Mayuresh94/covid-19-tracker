import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import NumberFormat from 'react-number-format';
import axios from "axios";
import './global-stats.css'
import '../Fonts/Calistoga-Regular.ttf'
import Moment from 'react-moment';
import ClipLoader from "react-spinners/ClipLoader";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function GlobalStats () {

  const [latest, setLatest] = useState([]);
  const [loading, setLoading] = useState(true);


useEffect(() => {
      axios.get("https://disease.sh/v2/all/",
    {
      headers: {
        "cache-control": "no-cache, no-store, max-age=0"
      }
    })
    .then(response => {
      setLatest(response.data);
      setLoading(false)
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])

    const date = new Date(parseInt(latest.updated));

    return (




<div>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">COVID-19 Live Status</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link to="/map">Map View</Nav.Link>
        </Nav>
        </Navbar>

        <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
        <Card bg="warning" style={{marginTop: "10px"}}>
         <Card.Body>
          <h1 style={{fontSize: 55, textAlign: "center", marginTop: "12px" }}><NumberFormat value={latest.cases} displayType={'text'} thousandSeparator={true}/>
          <ClipLoader
                   size={35}
                   color={"black"}
                   loading={loading}
                 />
          </h1>
          <small><b><i> *Count Of People Infected By COVID-19</i></b></small>
          </Card.Body>
          </Card>
        </div>
        <div className="col-sm-4"></div>
        </div>

      <CardDeck style={{margin: "10px"}} className="text-center">
        <Card bg="primary" text="white" >
          <Card.Body>
            <Card.Title>Active Cases</Card.Title>
            <Card.Text>
            <ClipLoader
                     size={25}
                     color={"black"}
                     loading={loading}
                   />
            <NumberFormat value={latest.active} displayType={'text'} thousandSeparator={true}/>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small> <span role="img" aria-label="clock">🕘</span> Updated <Moment fromNow>{date}</Moment></small>
          </Card.Footer>
        </Card>
        <Card bg="danger" text="white">
          <Card.Body className="text-center">
            <Card.Title>Deceased</Card.Title>
            <Card.Text>
            <ClipLoader
                     size={25}
                     color={"white"}
                     loading={loading}
                   />
            <NumberFormat value={latest.deaths} displayType={'text'} thousandSeparator={true}/>
            </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small> <span role="img" aria-label="clock">🕘</span> Updated <Moment fromNow>{date}</Moment></small>
            </Card.Footer>
        </Card>
        <Card bg="success" text="white">
          <Card.Body className="text-center">
            <Card.Title>Recovered Cases</Card.Title>
            <Card.Text>
            <ClipLoader
                     size={25}
                     color={"white"}
                     loading={loading}
                   />
            <NumberFormat value={latest.recovered} displayType={'text'} thousandSeparator={true}/>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small> <span role="img" aria-label="clock">🕘</span> Updated <Moment fromNow>{date}</Moment></small>
          </Card.Footer>
        </Card>
      <Card bg="secondary" text="white">
        <Card.Body className="text-center">
          <Card.Title>Tests Performed</Card.Title>
          <Card.Text>
          <ClipLoader
                   size={25}
                   color={"white"}
                   loading={loading}
                 />
          <NumberFormat value={latest.tests} displayType={'text'} thousandSeparator={true}/>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small> <span role="img" aria-label="clock">🕘</span> Updated <Moment fromNow>{date}</Moment></small>
        </Card.Footer>
      </Card>
    </CardDeck>

</div>
    )

}

export default GlobalStats;
