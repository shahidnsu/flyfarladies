
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import cart from '../assets/images/cart.svg';
import call from '../assets/images/call.png';



const Topnavbar = () => {


    return(

        <Container fluid className="border p-3 bg-light">

        <Row>
            <Col sm="12" xs="12" md="6" lg="6" className="d-flex justify-content-sm-center justify-content-xs-center justify-content-md-start justify-content-lg-start">
            <img src={call} alt="call"   />
            
                <h5 className="align-self-center ms-1">0175558211, info@flyfarladies.com</h5>
            </Col>
            <Col className="d-flex justify-content-md-end justify-content-lg-end justify-content-sm-center justify-content-xs-center">
            <Button  className ="rounded-pill border-white" variant="dark">Login/Register</Button>
                
               <img src={cart} alt="cart" />
            </Col>
        </Row>

        
            
    </Container>


    )
}
export default  Topnavbar