import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Columns from 'react-columns';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'react-moment';
import axios from "axios";


function CountrySpecificStats()  {

  const [searchCountries, setSearchCountries] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {

      axios.get("https://disease.sh/v2/countries",
    {
      headers: {
        "cache-control": "no-cache, no-store, max-age=0"
      }
    })
    .then(response => {
      setResults(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])

const toInputLowercase = e => {
  e.target.value = ("" + e.target.value).toLowerCase();
}



const filterCountries = results.filter(item => {
  return searchCountries === "" ? "" : item.country.toLowerCase().includes(searchCountries);
})

const countries = filterCountries.map((data, index) => {
  const date = new Date(parseInt(data.updated));
  // const lastUpdated = date.toString();


  return (
    <div>
    <Card
      key={index}
      border="secondary"
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
        <Card.Text><b>Tests</b>  : {data.tests}</Card.Text>
        <Card.Text><b>Active</b>  : {data.active}</Card.Text>
        <Card.Text style={{color: "red"}}><b>Critical</b>  : {data.critical}</Card.Text>
        <Card.Text><b><i>Cases Per Million : {data.casesPerOneMillion}</i></b></Card.Text>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated <Moment fromNow>{date}</Moment></small>
        </Card.Footer>
    </Card>
    </div>
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
    <div className="container">
    <div className="row">
      <div className="col"></div>
      <div className="col-sm-6">
        <Form>
          <Form.Group controlId="formSearch">
            <Form.Label><b>Search Country Below</b></Form.Label>
            <Form.Control type="text" placeholder="Start typing country name..."
            onChange={e => setSearchCountries(e.target.value)}
            onInput={toInputLowercase}/>
          </Form.Group>
        </Form>
      </div>
    <div className="col"></div>
    </div>
    <div className="row">
    <div className="col"></div>
    <div className="col-sm-10">
  <Columns queries={queries}>{countries}</Columns>
    </div>
    <div className="col"></div>
    </div>
    </div>

)
}

export default CountrySpecificStats
