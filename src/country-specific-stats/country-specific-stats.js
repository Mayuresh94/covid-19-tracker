import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Table from 'react-bootstrap/Table'
import NumberFormat from 'react-number-format';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';



function CountrySpecificStats()  {

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

const countryStats = data => {
  const items = [];
  for (let i = 0; i < results.length; i++) {
    items.push({
      id: results[i].countryInfo._id,
      falg: results[i].countryInfo.flag,
      country: results[i].country ,
      cases: results[i].cases,
      deaths: results[i].deaths,
      recovered: results[i].recovered,
      critical: results[i].critical,
      casesPerOneMillion: results[i].casesPerOneMillion});
  }
  return items;
};



const stats = countryStats();


  const columns = [
  {
  dataField: 'country',
  text: 'Country',
  sort: true,
  filter: textFilter(),
  headerStyle: (column, colIndex) => {
     return {
       backgroundColor: '#101820FF', color:"#ADEFD1FF"
     };
   }
},
{
  dataField: 'cases',
  text: 'Cases',
  sort: true,
  headerStyle: (column, colIndex) => {
     return {
       backgroundColor: '#101820FF', color:"#ADEFD1FF"
     };
   }
},
{
dataField: 'deaths',
text: 'Deaths',
sort: true,
headerStyle: (column, colIndex) => {
   return {
     backgroundColor: '#101820FF', color:"#ADEFD1FF"
   };
 }
},
{
dataField: 'recovered',
text: 'Recovered',
sort: true,
headerStyle: (column, colIndex) => {
   return {
     backgroundColor: '#101820FF', color:"#ADEFD1FF"
   };
 }
},
{
dataField: 'critical',
text: 'Critical',
sort: true,
headerStyle: (column, colIndex) => {
   return {
     backgroundColor: '#101820FF', color:"#ADEFD1FF"
   };
 }
},
{
dataField: 'casesPerOneMillion',
text: 'Cases Per Million',
sort: true,
headerStyle: (column, colIndex) => {
   return {
     backgroundColor: '#101820FF', color:"#ADEFD1FF"
   };
 }
}
];

const defaultSorted = [{
  dataField: 'cases',
  order: 'desc'
}];

  return (

    <div className="row">
    <div className="col"></div>
    <div className="col-sm-10" style={{fontSize:14}}>

    <BootstrapTable bootstrap4
                    striped
                    bordered
                    hover
                    keyField='id'
                    data={ stats }
                    columns={ columns }
                    filter={ filterFactory() }
                     defaultSorted={ defaultSorted }
                     pagination={ paginationFactory() }
                     rowStyle={{ height: '16px', color:"#00203FFF", backgroundColor: '#379683'}}

    />
    </div>
    <div className="col"></div>
    </div>





)
}

export default CountrySpecificStats
