import React from 'react';
import { faFacebook, faGoogle, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container,Row,Col,Stack,Button } from 'react-bootstrap';
import '../assets/style/footer.css'

const Footer =() => {

    return(
        <div>
            <Container fluid className="mt-5">
                <Row >
                <Col  >
                    <p className="h2 text-center"> READY FOR NEXT ADVENTURE?</p>
                    <div className="d-flex mt-5">
                    <Stack gap={3} className="col-md-2 col-sm-12 col-xs-12 col-lg-2">
                    <ul className="list-group list-group-flush">
                    <input type="text" className="list-group-item" placeholder="First Name.."></input>
                    <input type="email" className="list-group-item" placeholder="Email ID..."></input>
                    <input type="date" className="list-group-item" placeholder="Travel Date.."></input>
                    <input type="textarea" className="list-group-item" placeholder="Tell us about your dream adventure"></input>
                    
                          
    </ul>  
                        
                    </Stack>

                    <Stack gap={3} className="col-md-2 col-sm-12 col-xs-12 col-lg-2 mx-3">
                    <ul className="list-group list-group-flush">
                         <input type="text" className="list-group-item" placeholder="Last Name.."></input>
                         <input type="tel" className="list-group-item" placeholder="Contact No.."></input>
                         <input type="number" className="list-group-item" placeholder="Number of People.."></input>
                         <button className="footer-submit-button"> Submit</button>
  
  
</ul>
                
                        
                    </Stack>
                    </div>
                </Col>

                <Col md={2} lg={2} sm={12} xs={12} className="mt-1">

                <p className="h2 text-center">QUICK LINKS</p>
                <div className="mt-3 mx-3">
                   <Stack gap={3}>
                   <ul class="list-group list-group-flush">
                        <li class="list-group-item">Home</li>
                      <li class="list-group-item">About Us</li>
                    <li class="list-group-item">Contact Us</li>
                     <li class="list-group-item">Terms and Conditions</li>
                     <li class="list-group-item">Refund Policy </li>
</ul>
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