import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import NumberFormat from 'react-number-format';
import axios from "axios";
import './global-stats.css'
import '../Fonts/Calistoga-Regular.ttf'



function GlobalStats () {

  const [latest, setLatest] = useState([]);

  useEffect(() => {
      axios.get("https://disease.sh/v2/all")
    .then(response => {
      setLatest(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])

    const date = new Date(parseInt(latest.updated));
    const lastUpdated = date.toString();

    return (
        <div>
        <Container fluid style={{background:"#F4D03F"}}>
        <div className="row">
        <div className="col-sm-12">
          <h1 style={{fontSize: 55, textAlign: "center", marginTop: "12px" }}><NumberFormat value={latest.cases} displayType={'text'} thousandSeparator={true}/>*</h1>
          <small>* COVID-19 Positive Cases Recorded Worldwide Until :<b> {lastUpdated}</b></small>
        </div>
        </div>
        </Container>
      <CardDeck style={{margin: "10px"}}>
        <Card bg="primary" text="white" >
          <Card.Body className="text-center">
            <Card.Title>Active Cases</Card.Title>
            <Card.Text>
            <NumberFormat value={latest.active} displayType={'text'} thousandSeparator={true}/>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg="danger" text="white">
          <Card.Body className="text-center">
            <Card.Title>Total Deaths</Card.Title>
            <Card.Text>
            <NumberFormat value={latest.deaths} displayType={'text'} thousandSeparator={true}/>
            </Card.Text>
            </Card.Body>
        </Card>
        <Card bg="success" text="white">
          <Card.Body className="text-center">
            <Card.Title>Recovered Cases</Card.Title>
            <Card.Text>
            <NumberFormat value={latest.recovered} displayType={'text'} thousandSeparator={true}/>
            </Card.Text>
          </Card.Body>
        </Card>
      <Card bg="secondary" text="white">
        <Card.Body className="text-center">
          <Card.Title>Tests Performed</Card.Title>
          <Card.Text>
          <NumberFormat value={latest.tests} displayType={'text'} thousandSeparator={true}/>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
</div>
    )

}

export default GlobalStats;
