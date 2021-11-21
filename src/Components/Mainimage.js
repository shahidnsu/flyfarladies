import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Slideshow  from "./Slideshow";
import test from '../assets/images/test.jpeg';
import Mainimageslide from './Mainimageslide'

const MainImage =() => {

    return (
        <div>
            <Container fluid>
                <Row className="mt-5">
                    <Col>

                    <p className="h2 text-center">
                    Stock Images
                    </p>
                    <p className="h5 text-center">
                        The best source of tour stock image in Bangladesh. We collect pictures by professionals. Check which images are perfect for you.</p>
                    </Col>
                </Row>
            </Container>
           <Slideshow item ={<Mainimageslide testImg = {test} />}  />
        </div>
    )

}
export default MainImage