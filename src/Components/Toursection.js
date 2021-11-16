
import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Slideshow  from "./Slideshow";


const Toursection = () => {

    return (
        <div>

            <Container fluid >
            <Row className="ms-5 mt-5">
            <Col className="d-flex flex-column align-items-center">
                <p className="h1 mt-2">Most Popular Tours</p>
                <p className="h5 text-secondary mt-4 text-center fs-3 lh-1">Check out the Most Popular Tours deals below to book your holiday for the best price! Various promotions run throughout the year, so keep an eye out to bag the hottest of bargains for unforgettable experiences.
                </p>
                </Col>
                </Row>

            </Container>
            <Slideshow />

            


         


        </div>
    )


}
export default Toursection