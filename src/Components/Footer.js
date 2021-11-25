import React from 'react';
import { faCreativeCommonsNcJp, faFacebook, faGoogle, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container,Row,Col,Stack } from 'react-bootstrap';
import '../assets/style/footer.css'

const Footer =() => {

    return(
        <div>
           <Container fluid className="mt-5">
          

           <Row>
           

           <Col md="3" lg="3" sm="12" > 
           <p className="h5 mb-4"> YOUR NEXT ADVENTURE</p>
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
           <Stack gap={3} className=" mx-3 ">
                    <ul className="list-group list-group-flush">
                         <input type="text" className="list-group-item" placeholder="Last Name.."></input>
                         <input type="tel" className="list-group-item" placeholder="Contact No.."></input>
                         <input type="number" className="list-group-item" placeholder="Number of People.."></input>
                         <button className="footer-submit-button mt-2"> Submit</button>
  
  
</ul>
                
                        
                    </Stack>
           </Col>
           <Col md="3" lg="3" sm="12">

           <p className="h5 text-center">QUICK LINKS</p>
                <div className="mt-3 mx-3">
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
           <p className="h5">SOCIAL WITH US</p>

                <Stack direction ="horizontal" gap={3} className="mt-4">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                 <FontAwesomeIcon icon ={faYoutube} size="2x"/>
                 <FontAwesomeIcon icon= {faLinkedin} size="2x"/>
                 <FontAwesomeIcon icon ={faTwitter} size="2x"/>
                 <FontAwesomeIcon icon ={faGoogle} size="2x"/>

                  </Stack>
               
           </Col>

           
                
                
                {/*<Col  md="4" lg="4" sm="12" >
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

                    
                    </div>
                </Col>

                <Col md={2} lg={2} sm={12} xs={12} className="mt-1">

                <p className="h2 text-center">QUICK LINKS</p>
                <div className="mt-3 mx-3">
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
                <Col md={3} xs={12} sm={12} lg={3} className="mt-1">
                <p className="h2">SOCIAL WITH US</p>

                <Stack direction ="horizontal" gap={3} className="mt-4">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                 <FontAwesomeIcon icon ={faYoutube} size="2x"/>
                 <FontAwesomeIcon icon= {faLinkedin} size="2x"/>
                 <FontAwesomeIcon icon ={faTwitter} size="2x"/>
                 <FontAwesomeIcon icon ={faGoogle} size="2x"/>

                  </Stack>

                </Col>
                */}


                </Row>
            </Container>
        </div>
    )



}



export default Footer