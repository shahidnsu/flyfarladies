import React from "react";

import { Container,Row,Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus,faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";

const Topnavbar = () => {


    return(

        <Container fluid className="border p-3 bg-light">

        <Row>
            <Col sm="12" xs="12" md="6" lg="6" className="d-flex justify-content-sm-center justify-content-xs-center justify-content-md-start justify-content-lg-start">
            <FontAwesomeIcon   className = "algin-self-baseline" icon={faPhoneSquareAlt} size="2x"/>
                <h5 className="align-self-center ms-1">0175558211, info@flyfarladies.com</h5>
            </Col>
            <Col className="d-flex justify-content-md-end justify-content-lg-end justify-content-sm-center justify-content-xs-center">
            <Button  className ="rounded-pill border-white" variant="dark">Login/Register</Button>
                
                <FontAwesomeIcon  className="mt-1" icon= {faCartPlus} size="2x" />
            </Col>
        </Row>

        {/*
        <Row className="pt-2 d-flex">
           <Col  lg={6} md="6" sm= "12" xs ="12" className="d-flex justify-content-start">
           <FontAwesomeIcon   className = "pe-1" icon={faPhoneSquareAlt} size="2x"/>
                <h5>0175558211, info@flyfarladies.com</h5> 
            </Col>

            <Col   lg="6" md="6" sm="12" xs="12"  className="d-flex justify-content-end">

                <Button  className ="rounded-pill border-white" variant="dark">Login/Register</Button>
                
                <FontAwesomeIcon  className="mt-1" icon= {faCartPlus} size="2x" />
                </Col>   
                
                
        </Row>
        */}
            
    </Container>


    )
}
export default  Topnavbar