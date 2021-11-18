import React from 'react';

import { Carousel,Container,Row,Col } from 'react-bootstrap'

const Slideshow = ({item}) => {

    return (
        <div>

<Carousel>
  <Carousel.Item>
  <Container fluid>
            <Row className="mt-5 ms-2 d-flex">
                 <Col>
            
                {item}
                </Col>
                <Col >
                {item}
                </Col>
                <Col >
                {item}
                </Col>
                </Row>
                
            </Container>  
            </Carousel.Item> 


            <Carousel.Item>
  <Container fluid>
            <Row className="mt-5 ms-2 d-flex">
                 <Col>
            
                {item}
                </Col>
                <Col >
                {item}
                </Col>
                <Col >
                 {item}
                </Col>
                </Row>
                
            </Container>  
            </Carousel.Item> 

            <Carousel.Item>
  <Container fluid>
            <Row className="mt-5 ms-2 d-flex">
                 <Col>
            
                {item}
                </Col>
                <Col >
                {item}
                </Col>
                <Col >
                {item}
                </Col>
                </Row>
                
            </Container>  
            </Carousel.Item> 
    

</Carousel>

        </div>
    )
}

export default Slideshow