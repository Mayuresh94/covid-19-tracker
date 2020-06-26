import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Columns from 'react-columns';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";



function App() {
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");

  useEffect(() => {
    axios
    .all([
      axios.get("https://disease.sh/v2/all"),
      axios.get("https://disease.sh/v2/countries")
    ])
    .then(responseArr => {
      setLatest(responseArr[0].data);
      setResults(responseArr[1].data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();

  const toInputLowercase = e => {
    e.target.value = ("" + e.target.value).toLowerCase();
  }

  const filterCountries = results.filter(item => {
    return searchCountries === "" ? "" : item.country.toLowerCase().includes(searchCountries);
  })

  const countries = filterCountries.map((data, index) => {
    return (
      <Card
      key={index}
      bg="light"
      text="dark"
      className="text-center"
      style={{margin: "10px"}}>
      <Card.Img variant="top" src={data.countryInfo.flag}/>
      <Card.Body className="text-center">
      <Card.Title><b>{data.country.toUpperCase()}</b></Card.Title>
      <Card.Text><b>Cases</b>      : {data.cases}</Card.Text>
      <Card.Text><b>Deaths</b>     : {data.deaths}</Card.Text>
      <Card.Text><b>Recovered</b>  : {data.recovered}</Card.Text>
      </Card.Body>
      </Card>
    )
  })

  var queries = [{
    columns: 2,
    query: 'min-width: 500px'
  }, {
    columns: 3,
    query: 'min-width: 1000px'
  }];

  return (
    <div className="App">
    <Card bg="warning" style={{margin: "1px"}}>
    <Card.Body>
    <Card.Title className="text-center" style={{fontSize: 60}}>
    {latest.cases} *</Card.Title>
    <small>* COVID-19 Positive Cases Worldwide Until The Most Recent Update.</small>
    </Card.Body>
    </Card>
    <CardDeck>
    <Card bg="primary" text="white" style={{margin: "10px"}}>
    <Card.Body className="text-center">
    <Card.Title>Active Cases</Card.Title>
    <Card.Text>
    {latest.active}
    </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small>Last updated : {lastUpdated}</small>
    </Card.Footer>
    </Card>
    <Card bg="danger" text="white" style={{margin: "10px"}}>
    <Card.Body className="text-center">
    <Card.Title>Total Deaths</Card.Title>
    <Card.Text>
    {latest.deaths}
    </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small>Last updated : {lastUpdated}</small>
    </Card.Footer>
    </Card>
    <Card bg="success" text="white" style={{margin: "10px"}}>
    <Card.Body className="text-center">
    <Card.Title>Recovered Cases</Card.Title>
    <Card.Text>
    {latest.recovered}
    </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small>Last updated : {lastUpdated}</small>
    </Card.Footer>
    </Card>
    </CardDeck>
    <Form>
    <Form.Group controlId="formSearch">
    <Form.Control type="text" placeholder="Search for a Country"
    onChange={e => setSearchCountries(e.target.value)}
     onInput={toInputLowercase}
    />
      </Form.Group>
      </Form>
    <Columns queries={queries}>{countries}</Columns>
    </div>
  );
}

export default App;
