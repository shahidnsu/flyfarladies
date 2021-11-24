import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import test from '../assets/images/test.jpeg';
import '../assets/style/dealSection.css'

const Dealsection = () => {

    let dealSection = <Container fluid className="mt-4">

    <Row>
        <Col className="justify-content-sm-center " md={8} lg={8} sm={12} xs={12}>
            <p className="deals-left-heading">Deals & Discounts</p>
            <p className="deals-left-content"> we are providing the best deals and discounts. 
            Check out our coupon today and confirm your dream destination for travel.</p>
        </Col>
    </Row>

        <Row>
        <Col className="d-flex ms-1 justify-content-between" md={8} lg={8} sm={12} xs={12} >
            
            <img className="w-50" src={test} alt="tour spot in bangladesh" />
            <img className="w-50 ps-4" src={test} alt="tour spot in bangladesh" />

        </Col>

        <Col md="3" lg="3" sm="12" xs="12" className="border ms-4">
            <p className="review-box-heading">Top reviews</p>
            <p>It's usual Travel agency who work for ladies to help
            them reaching their destination or desired palaces with available airplane</p>

            <p className="review-box-reviewer-name">Faria Bobi</p>

        </Col>

        </Row>
    </Container>

       
    
    return (
        <div>
        {dealSection}

        </div>
    )
}

export default Dealsection