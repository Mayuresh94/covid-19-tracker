import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import NumberFormat from 'react-number-format';
import axios from "axios";
import './global-stats.css'
import Moment from 'react-moment';
import ClipLoader from "react-spinners/ClipLoader";
import ReactGA from 'react-ga';

function GlobalStats () {

  const [latest, setLatest] = useState([]);
  const [loading, setLoading] = useState(true);


useEffect(() => {
  ReactGA.initialize('UA-172148173-1');
  ReactGA.pageview("/");
  ReactGA.pageview("/map");

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

      <CardDeck style={{margin: "10px"}} className="text-center">
      <Card bg="secondary" text="white" >
        <Card.Body className="text-center">
          <Card.Title>Infected</Card.Title>
          <Card.Text>
          <ClipLoader
                   size={25}
                   color={"white"}
                   loading={loading}
                 />
          <NumberFormat value={latest.cases} displayType={'text'} thousandSeparator={true}/>
          </Card.Text>
        </Card.Body>
      </Card>
        <Card bg="primary" text="white" >
          <Card.Body>
            <Card.Title>Active Cases</Card.Title>
            <Card.Text>
            <ClipLoader
                     size={25}
                     color={"white"}
                     loading={loading}
                   />
            <NumberFormat value={latest.active} displayType={'text'} thousandSeparator={true}/>
            </Card.Text>
          </Card.Body>
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
        </Card>
    </CardDeck>
<div style={{marginLeft:"22px", fontSize:"3"}}>
<h6><span role="img" aria-label="clock">🕘</span> <i>Statistics On This Site Were Updated <Moment fromNow>{date}</Moment></i></h6>
</div>
</div>
    )

}

export default GlobalStats;
