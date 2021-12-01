import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import test from '../assets/images/test.jpeg';
import '../assets/style/Gallery.css';

const Gallery = () => {
    const heading = 'Photo gallery'
    return(
        <>
        <Container>
            <Row >
                <Col sm='12' md='10' lg='10'>
                <p className="gallery-heading">{heading}</p>
                </Col>
            </Row>
        </Container>
       
        <Container  className="d-flex mt-3">
        
        
            <Row>
            
            <Col  lg="3" md="3" sm="12" className="shadow mt-1 row-no-margin">
            
                
                    
                       <div className ="d-flex">
                           <img src={test} className ="w-75" alt="Nepal tour" />
                          

                           <div className="d-flex flex-column ms-1">
                              
                           <img src={test} className="w-100" alt="Nepal tour" />
                           <img src={test} className="w-100 mt-1" alt="Nepal tour" />
                           <img src={test} className="w-100 mt-1" alt="Nepal tour" />
                           </div>

                        
                       </div>

                       <div className="d-flex flex-column">
                           <span className="gallery-label text-center mt-4">BALI, INDONESIA</span>
                           <span className="gallery-label-button text-center w-2 mx-auto mb-4">View</span>
                       </div>
                      

                        
                        

                    
                
            </Col>
            
            <Col lg="3" md="3" sm="12" className="shadow ms-2 mt-1 row-no-margin">
                

                 <div className ="d-flex">
                           <img src={test} className="w-75" alt="Nepal tour" />
                          

                           <div className="d-flex flex-column ms-1">
                              
                           <img src={test} className="w-100" alt="Nepal tour" />
                           <img src={test} className="w-100 mt-1" alt="Nepal tour" />
                           <img src={test} className="w-100 mt-1" alt="Nepal tour" />
                           </div>

                        
                       </div>

                       <div className="d-flex flex-column">
                           <span className="gallery-label text-center mt-4">BALI, INDONESIA</span>
                           <span className="gallery-label-button text-center w-2 mx-auto mb-4">View</span>
                       </div>
            </Col>
            <Col lg="3" md="3" sm="12" className="shadow ms-2 mt-1 row-no-margin">
            <div className ="d-flex">
                           <img src={test} className="w-75" alt="Nepal tour" />
                          

                           <div className="d-flex flex-column ms-1">
                              
                           <img src={test} className="w-100" alt="Nepal tour" />
                           <img src={test} className="w-100 mt-1" alt="Nepal tour" />
                           <img src={test} className="w-100 mt-1" alt="Nepal tour" />
                           </div>

                        
                       </div>

                       <div className="d-flex flex-column">
                           <span className="gallery-label text-center mt-4">BALI, INDONESIA</span>
                           <span className="gallery-label-button text-center w-2 mx-auto mb-4">View</span>
                       </div>
            </Col>
            </Row>
            

           </Container>
            

            



            
            <Container className="d-flex mt-3">
            <Row>
            <Col  lg="3" md="3" sm="12" className="shadow mt-1 row-no-margin">
            
                
                    
                       <div className ="d-flex ">
                           <img src={test} className="w-75" alt="Nepal tour" />
                          

                           <div className="d-flex flex-column ms-1 ">
                              
                           <img src={test} className="w-100" alt="Nepal tour" />
                           <img src={test} className="w-100 mt-1" alt="Nepal tour" />
                           <img src={test} className="w-100 mt-1" alt="Nepal tour" />
                           </div>

                        
                       </div>

                       <div className="d-flex flex-column">
                           <span className="gallery-label text-center mt-4">BALI, INDONESIA</span>
                           <span className="gallery-label-button text-center w-2 mx-auto mb-4">View</span>
                       </div>

                        
                        

                    
                
            </Col>
            <Col lg="3" md="3" sm="12" className="shadow ms-2 mt-1 row-no-margin">
                

                 <div className ="d-flex">
                           <img src={test} className="w-75" alt="Nepal tour" />
                          

                           <div className="d-flex flex-column ms-1">
                              
                           <img src={test} className="w-100" alt="Nepal tour" />
                           <img src={test} className="w-100 mt-1" alt="Nepal tour" />
                           <img src={test} className="w-100 mt-1" alt="Nepal tour" />
                           </div>

                        
                       </div>

                       <div className="d-flex flex-column">
                           <span className="gallery-label text-center mt-4">BALI, INDONESIA</span>
                           <span className="gallery-label-button text-center w-2 mx-auto mb-4">View</span>
                       </div>
            </Col>
            <Col lg="3" md="3" sm="12" className="shadow ms-2 mt-1 row-no-margin">
            <div className ="d-flex">
                           <img src={test} className="w-75" alt="Nepal tour" />
                          

                           <div className="d-flex flex-column ms-1">
                              
                           <img src={test} className="w-100" alt="Nepal tour" />
                           <img src={test} className="w-100 mt-1" alt="Nepal tour" />
                           <img src={test} className="w-100 mt-1" alt="Nepal tour" />
                           </div>

                        
                       </div>

                       <div className="d-flex flex-column">
                           <span className="gallery-label text-center mt-4">BALI, INDONESIA</span>
                           <span className="gallery-label-button text-center w-2 mx-auto mb-4">View</span>
                       </div>
            </Col>
            </Row>

            </Container>
            

            



            
            <Container className="d-flex mt-3 justify-content-sm-center">
            <Row>
            <Col  lg="3" md="3" sm="12" className="shadow mt-1 row-no-margin">
            
                
                    
                       <div className ="d-flex ">
                           <img src={test} className="w-75" alt="Nepal tour" />
                          

                           <div className="d-flex flex-column ms-1">
                              
                           <img src={test} className="w-100" alt="Nepal tour" />
                           <img src={test} className="w-100 mt-1" alt="Nepal tour" />
                           <img src={test} className="w-100 mt-1" alt="Nepal tour" />
                           </div>

                        
                       </div>

                       <div className="d-flex flex-column">
                           <span className="gallery-label text-center mt-4">BALI, INDONESIA</span>
                           <span className="gallery-label-button text-center w-2 mx-auto mb-4">View</span>
                       </div>

                        
                        

                    
                
            </Col>
            <Col lg="3" md="3" sm="12" className="shadow ms-2 mt-1 row-no-margin">
                

                 <div className ="d-flex">
                           <img src={test} className="w-75" alt="Nepal tour" />
                          

                           <div className="d-flex flex-column ms-1">
                              
                           <img src={test} className="w-100" alt="Nepal tour" />
                           <img src={test} className="w-100 mt-1" alt="Nepal tour" />
                           <img src={test} className="w-100 mt-1" alt="Nepal tour" />
                           </div>

                        
                       </div>

                       <div className="d-flex flex-column">
                           <span className="gallery-label text-center mt-4">BALI, INDONESIA</span>
                           <span className="gallery-label-button text-center w-2 mx-auto mb-4">View</span>
                       </div>
            </Col>
            <Col lg="3" md="3" sm="12" className="shadow ms-2 mt-1 row-no-margin">
            <div className ="d-flex">
                           <img src={test} className="w-75" alt="Nepal tour" />
                          

                           <div className="d-flex flex-column ms-1">
                              
                           <img src={test} className="w-100" alt="Nepal tour" />
                           <img src={test} className="w-100 mt-1" alt="Nepal tour" />
                           <img src={test} className="w-100 mt-1" alt="Nepal tour" />
                           </div>

                        
                       </div>

                       <div className="d-flex flex-column">
                           <span className="gallery-label text-center mt-4">BALI, INDONESIA</span>
                           <span className="gallery-label-button text-center w-2 mx-auto mb-4">View</span>
                       </div>
            </Col>
            </Row>
            

           
        </Container>

        </>
    )
}

export default Gallery