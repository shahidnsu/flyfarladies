import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import '../assets/style/Job.css'
import bag from '../assets/images/bag.png'
import location from '../assets/images/location.png'
import product from '../assets/images/product.svg'


const Job = () => {


    return(
        <>
        
        <Container fluid className="mt-5">

        <Row className="p-3 search-box-heading">
            <Col lg='5' md='5'>
                <img src={bag} alt="bag" />
                <span className="ms-2 search-label">What</span>
            </Col>

            <Col lg='5' md='5'>
                <img src={location} alt="bag" />
                <span className="ms-2 search-label">Where</span>
            </Col>
        </Row>



        <Row className="job-input-box">
        
        <Col sm='12' lg='5' md='5' className="input-job">
        
        <input type="text" placeholder="Job Title Keywords Or Company" className=" input-job-title">
            
        </input>
        </Col>


        <Col sm='12' lg='4' md='4'  className="input-job input-job-border">
        
        
        <input type="text" placeholder="Town or Region" className=" input-job-title">
            
        </input>
        </Col>


       <Col sm='12' lg='3' md='3' >
           <button className="job-input-button">Search</button>
       </Col>
        

        </Row>
        <Row>
            <Col className='mt-2'>
                <span className="job-number-heading">
                    <span className="job-heading-number">14</span> jobs published in Bangladesh
                </span>
            </Col>
            </Row>


        <Row className="mt-5 border  mx-2">
            <Col className="border-end border-bottom p-3">
            <img className='me-1' src={product} alt="product"/>
                <span>Accounting</span>
            </Col>

            <Col className="border-end border-bottom p-3">
            <img className='me-1' src={product} alt="product"/>
                <span>Content Writing</span>
            </Col>
            <Col className="border-end border-bottom p-3">
            <img className='me-1' src={product} alt="product"/>
                <span>Engineering</span>
            </Col>
            <Col className= "border-end p-3">
            <img className='me-1' src={product} alt="product"/>
                <span>HR</span>
            </Col>
        </Row>


        <Row className="border mx-2">

        <Col className="border-end p-3" lg='3' md='3' sm='12'>
        <img className='me-1' src={product} alt="product"/>
                <span>System Engineering</span>
            </Col>
            <Col className= "border-end p-3">
                
            </Col>

        </Row>

        </Container>


        </>
    )
}

export default Job