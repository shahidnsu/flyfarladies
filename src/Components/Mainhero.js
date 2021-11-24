import React from 'react';
import '../assets/style/Mainhero.css'
import { Col, Container, Row } from 'react-bootstrap';


const Mainhero  = () => {

  return (
    <div  className="main-hero-body d-flex  flex-column justify-content-center align-items-center">

    <Container fluid>
      <Row>
            <Col  className="mt-5" sm={12} lg={12} md={12} xs={12}>
       <p className="h1 text-center  main-hero-banner">Adventure is Worthwhile</p>

      </Col>
      
      </Row>
    </Container>

    <Container fluid>
    <Row className="d-flex mt-5 journey-search align-items-center mx-3">

    <Col sm={12} xs={12} md={2} className="journey-search-left">
          <p>Find Your <br></br><strong>Destination</strong></p>

          </Col>
          <Col sm={12} xs={12} md={2}>
        <select name="years" id="years">
            <option value="select year">Select Year</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
    
          </select>
          
          </Col>
          <Col sm={12} xs={12} md={2}>
          <select name="month" id="month">
       <option value="Select Month">Select Month</option>
       <option value="January">January</option>
      <option value="February">February</option>
       <option value="March">March</option>
       <option value="April">April</option>
       <option value="May">May</option>
       <option value="June">June</option>
       <option value="July">July</option>
       <option value="August">August</option>
       <option value="September">September</option>
       <option value ="October">October</option>
       <option value="November">November</option>
       <option value="December">December</option>
  </select>
            
          </Col>
          <Col sm={12} xs={12} md={2}>
          <select name="tour" id="tour">
        <option value="inbound/outbound">Select Inbound/outBound</option>
       <option value="Inbound">Inbound</option>
       <option value="Outbound">OutBound</option>
       
     </select>
          </Col>
          <Col sm={12} xs={12} md={2}>
        <select name="tripday" id="tripday">
          <option value="Day Trip/ night trip">Select Day trip/Night out</option>
          <option value="daytrip">DayTrip</option>
         <option value="nighttrip">NightTrip</option>
         
       </select>
          </Col>
          <Col sm={12} xs={12} md={2} >
          <button className="btn-search">SEARCH</button>
          
          </Col>
       
        </Row>

    </Container>

    
    
  
    </div>
  )
}

export default Mainhero