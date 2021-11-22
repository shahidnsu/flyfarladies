
import { faFacebook, faGoogle, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container,Row,Col,Stack,Button } from 'react-bootstrap';

const Footer =() => {

    return(
        <div>
            <Container fluid className="mt-5">
                <Row >
                <Col  >
                    <p className="h2 text-center"> READY FOR NEXT ADVENTURE?</p>
                    <div className="d-flex mt-5">
                    <Stack gap={3} className="col-md-2 col-sm-12 col-xs-12 col-lg-2">
                    <input   type="name" placeholder="First Name.."></input>
                    <input type="name" placeholder="Email ID.."></input>
                    <input type="name" placeholder="Travel Date.."></input>
                    <input type ="textArea" placeholder="Tell us about your dream  adventure.."></input>
                        
                    </Stack>

                    <Stack gap={3} className="col-md-2 col-sm-12 col-xs-12 col-lg-2 mx-3">
                    <input type="name" placeholder="Last Name.."></input>
                    <input type="name" placeholder="Contact No."></input>
                    <input type="name" placeholder="Number of People.."></input>
                    <Button variant="outline-secondary">Secondary</Button>
                        
                    </Stack>
                    </div>
                </Col>

                <Col md={2} lg={2} sm={12} xs={12} className="mt-1">

                <p className="h2 text-center">QUICK LINKS</p>
                <div className="mt-3 mx-3">
                   <Stack gap={3}>
                   <a href="#">Home</a>
                   <a href="#">About Us</a>
                   <a href="#">Contact Us</a>
                   <a href="#">Terms and Conditions</a>
                   <a href="#">Privacy Policy</a>
                   <a href="#">Refund Policy</a>
                   </Stack>
                </div>

                </Col>
                <Col md={3} xs={12} sm={12} lg={3} className="mt-1">
                <p className="h2">SOCIAL WITH US</p>

                <Stack direction ="horizontal" gap={3} className="mt-4">
                  <FontAwesomeIcon icon={faFacebook} size="3x" />
                 <FontAwesomeIcon icon ={faYoutube} size="3x"/>
                 <FontAwesomeIcon icon= {faLinkedin} size="3x"/>
                 <FontAwesomeIcon icon ={faTwitter} size="3x"/>
                 <FontAwesomeIcon icon ={faGoogle} size="3x"/>

                  </Stack>

                </Col>


                </Row>
            </Container>
        </div>
    )



}



export default Footer