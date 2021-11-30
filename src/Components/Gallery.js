import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import test from '../assets/images/test.jpeg';

const Gallery = () => {
    const heading = 'Photo gallery'
    return(
        <>
        <h1 className="text-center">{heading}</h1>
        <Container fluid>
            <Row>
            <Col className="d-flex" lg="4" md="4" sm="12">
            
                
                    
                        <img  className ="w-50 h-100 me-2" src={test} alt="test" />
                        <p>Bangladesh khulna</p>
                        <div className="d-flex flex-column ">
                        <img  className ="w-50 h-75 mb-2" src={test} alt="test" />
                        <img  className ="w-50 h-75 mb-2" src={test} alt="test" />
                        <img  className ="w-50  h-75 mb-2" src={test} alt="test" />
                        
                        </div>

                        
                        

                    
                
            </Col>
            <Col>
                2
            </Col>
            <Col>
                  3
            </Col>
            

            </Row>
        </Container>

        </>
    )
}

export default Gallery