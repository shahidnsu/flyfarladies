
import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Card from "./Card";


const Toursection = () => {

    return (
        <div>

            <Container fluid >
            <Row className="ms-5 mt-5">
            <Col className="d-flex flex-column align-items-center">
                <p className="h1 mt-2">Most Popular Tours</p>
                <p className="h5 text-secondary mt-4 text-center fs-3 lh-2">Check out the Most Popular Tours deals below to book your holiday for the best price! Various promotions run throughout the year, so keep an eye out to bag the hottest of bargains for unforgettable experiences.
                </p>
                </Col>
                </Row>

            </Container>

            <Container fluid>
            <Row className="mt-5 ms-2 d-flex">
                 <Col>
            
                <Card  des = "Ankara" price= "$1950.00" day ="1" people="10" />
                </Col>
                <Col >
                <Card  des = "Khulna" price= "$2000.00" day ="3" people="10"/>
                </Col>
                <Col >
                <Card des = "Cox's Bazar" price= "$1200.00" day ="5" people="10" />
                </Col>
                </Row>
                
            </Container>


         


        </div>
    )


}
export default Toursection