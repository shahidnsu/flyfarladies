
import { faFacebook, faGoogle, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container,Row,Col,Button } from "react-bootstrap";
import "../assets/style/footer.css"

const Footer = () => {
    return(
        <div>

        
        
            <Container fluid className="mt-5 shadow-lg">
                <Row className="d-flex  ">
                <p className="h3 ps-5"> READY FOR YOUR NEXT ADVENTURE </p>
                    
                
                <Col lg={3} className="mt-3">
                
                    
                
                <div className="vstack gap-3">

                <input type="text" class="form-control" placeholder="First name" aria-label="First name"></input>

                <input type="text" class="form-control" placeholder="Email ID" aria-label="Email ID"></input>

                <input type="text" class="form-control" placeholder="Travel Date" aria-label="Travel Date.."></input>
                <input type="text" class="form-control" placeholder="Tell us about your dream adventure" aria-label="dream adventure"></input>


                </div>

                </Col>

                

<<<<<<< HEAD
                <Col  lg ={3} className="mt-3 me-5 ">
=======
                <Col className="mt-3 me-5 ">
                   
>>>>>>> 84f2bc0172af4dea43f4ae10c3d3c6c5a301121e

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
                <Col lg ={3} className="hstack gap-3 align-items-start ">

                <FontAwesomeIcon icon ={faFacebook} size="3x"/> 
                <FontAwesomeIcon icon={faTwitter} size="3x" />
                <FontAwesomeIcon icon ={faYoutube} size="3x" />
                <FontAwesomeIcon icon={faGoogle} size="3x" />
                                  
                </Col>

                </Row>
            </Container>
        </div>
    )
}
export default Footer