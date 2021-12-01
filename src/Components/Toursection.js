
import React from "react";
import { Container,Row,Col } from "react-bootstrap";

import Card from "./Card";


const Toursection = () => {

    return (
       

        <div>
            <Container fluid>
                <Row className="mt-5">
                    <Col>
                        <p className="h2 text-center">
                        Most Popular Tours
                        </p>
                        <p className="text-center mt-3">
                        Check out the Most Popular Tours deals below to book your holiday for the best price! Various promotions run throughout the year, so keep an eye out to bag the hottest of bargains for unforgettable experiences.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container fluid >
                <Row className="d-flex flex-row ms-1">
                    <Col md={4} lg={4} xs={12} sm={12} className=" justify-content-sm-center">
                        <Card des="Ankara" price="$20000" day="4" people="5" />
                    </Col>
                    <Col md={4} lg={4} xs={12} sm={12}  >
                    <Card des="Khulna" price="$2000" day="3" people="7" />
                    </Col>
                    <Col md={4} lg={4} xs={12} sm={12}>
                    <Card des="Khulna" price="$2000" day="3" people="7" />
                    </Col>
                </Row>
            </Container>
        </div>
    )


}
export default Toursection