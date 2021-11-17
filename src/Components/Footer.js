
import { ArrowRight } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container,Row,Col,Button } from "react-bootstrap";

const Footer = () => {
    return(
        <div>

        <Container fluid className="mt-5">
            <Row >
                <Col className="d-flex justify-content-between">
                    <p className="h3">READY FOR YOUR NEXT ADVENTURE</p>
                    <p className="h4 ">QUICK LINKS</p>
                    <p className="h4">Social with us</p>


                </Col>
            </Row>
        </Container>
            <Container fluid className="mt-3">
                <Row className="d-flex">
                
                <Col className="mt-3">
                
                <div className="vstack gap-3">

                <input type="text" class="form-control" placeholder="First name" aria-label="First name"></input>

                <input type="text" class="form-control" placeholder="Email ID" aria-label="Email ID"></input>

                <input type="text" class="form-control" placeholder="Travel Date" aria-label="Travel Date.."></input>
                <input type="text" class="form-control" placeholder="Tell us about your dream adventure" aria-label="dream adventure"></input>


                </div>

                </Col>

                

                <Col className="mt-3 ">

                <div className="vstack gap-3">

                <input type="text" class="form-control" placeholder="Last Name" aria-label="Last  Name"></input>

                <input type="text" class="form-control" placeholder="contact no" aria-label="Contact No.."></input>

                <input type="text" class="form-control" placeholder="Number of People" aria-label="Number of People.."></input>
                <Button variant="primary">Submit</Button>
                </div>

                </Col>

                <Col>
                

                <div className="vstack gap-3 ms-5">
                    <a className ="h5" href="#">Home</a>
                    <a className ="h5" href="#">About us</a>
                    <a className ="h5" href="#">Contact Us</a>
                    <a className ="h5" href="#">Terms and Conditions</a>
                    <a className ="h5" href="#">Privacy Policy</a>
                    <a className ="h5" href="#">Refund Policy</a>
                    
                </div>

                </Col>
                <Col className="hstack gap-3">

                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                    
                </Col>

                </Row>
            </Container>
        </div>
    )
}
export default Footer