import React from 'react';
import {  faFacebook, faGoogle, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container,Row,Col,Stack } from 'react-bootstrap';
import '../assets/style/footer.css'

const Footer =() => {

    return(
        <div>
           <Container fluid className="mt-5 shadow-lg">
          

           <Row className="footer-main">
           

           <Col md="3" lg="3" sm="12" > 
           <p className="h5 mt-5  text-center"> YOUR NEXT ADVENTURE</p>
           <Stack gap={3}  className="justify-content-sm-center d-flex">
                    <ul className="list-group list-group-flush">
                    <input type="text" className="list-group-item" placeholder="First Name.."></input>
                    <input type="email" className="list-group-item" placeholder="Email ID..."></input>
                    <input type="date" className="list-group-item" placeholder="Travel Date.."></input>
                    <input type="textarea" className="list-group-item" placeholder="Tell us about your dream adventure"></input>
                    
                          
    </ul>  
                        
                    </Stack>


           </Col>
           <Col md="3" lg="3" sm="12" className="mt-5" >
           <Stack gap={3} className=" mt-4 mx-3 ">
                    <ul className="list-group list-group-flush">
                         <input type="text" className="list-group-item" placeholder="Last Name.."></input>
                         <input type="tel" className="list-group-item" placeholder="Contact No.."></input>
                         <input type="number" className="list-group-item" placeholder="Number of People.."></input>
                         <button className="footer-submit-button mt-2"> Submit</button>
  
  
</ul>
                
                        
                    </Stack>
           </Col>
           <Col md="3" lg="3" sm="12">

           <p className="h5 text-center mt-5">QUICK LINKS</p>
                <div className="mt-2 mx-3">
                   <Stack gap={3}>
                   <ul className="list-group list-group-flush">
                        <li className="list-group-item">Home</li>
                      <li className="list-group-item">About Us</li>
                    <li className="list-group-item">Contact Us</li>
                     <li className="list-group-item">Terms and Conditions</li>
                     <li className="list-group-item">Refund Policy </li>
</ul>
                   </Stack>
                </div>
               
           </Col>
           <Col md="3" lg="3" sm="12">
           <p className="h5 mt-5 ">SOCIAL WITH US</p>

                <Stack direction ="horizontal" gap={3} className="mt-4">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                 <FontAwesomeIcon icon ={faYoutube} size="2x"/>
                 <FontAwesomeIcon icon= {faLinkedin} size="2x"/>
                 <FontAwesomeIcon icon ={faTwitter} size="2x"/>
                 <FontAwesomeIcon icon ={faGoogle} size="2x"/>

                  </Stack>
               
           </Col>

           
                
                
                


                </Row>

                <Row>
                  <Col className="copyright">
                    <p className="footer-copyright-p">Copyright © FlyFarLadies 2021, All Rights Reserved.</p>
                  </Col>
                </Row>
            </Container>
        </div>
    )



}



export default Footer