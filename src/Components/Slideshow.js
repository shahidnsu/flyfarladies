import React from 'react'
import Card from './Card'
import { Carousel,Container,Row,Col } from 'react-bootstrap'

const Slideshow = () => {

    return (
        <div>

<Carousel>
  <Carousel.Item>
  <Container fluid>
            <Row className="mt-5 ms-2 d-flex">
                 <Col>
            
                <Card  des = "Ankara" price= "$1950.00" day ="1" people="10" />
                </Col>
                <Col >
                <Card  des = "Khulna" price= "$2000.00" day ="3" people="10"/>
                </Col>
                <Col >
                <Card des = "Cox's Bazar" price= "$1200.00" day ="5" people="10" />
                </Col>
                </Row>
                
            </Container>  
            </Carousel.Item> 


            <Carousel.Item>
  <Container fluid>
            <Row className="mt-5 ms-2 d-flex">
                 <Col>
            
                <Card  des = "Ankara" price= "$1950.00" day ="1" people="10" />
                </Col>
                <Col >
                <Card  des = "Khulna" price= "$2000.00" day ="3" people="10"/>
                </Col>
                <Col >
                <Card des = "Cox's Bazar" price= "$1200.00" day ="5" people="10" />
                </Col>
                </Row>
                
            </Container>  
            </Carousel.Item> 

            <Carousel.Item>
  <Container fluid>
            <Row className="mt-5 ms-2 d-flex">
                 <Col>
            
                <Card  des = "Ankara" price= "$1950.00" day ="1" people="10" />
                </Col>
                <Col >
                <Card  des = "Khulna" price= "$2000.00" day ="3" people="10"/>
                </Col>
                <Col >
                <Card des = "Cox's Bazar" price= "$1200.00" day ="5" people="10" />
                </Col>
                </Row>
                
            </Container>  
            </Carousel.Item> 
    

</Carousel>

        </div>
    )
}

export default Slideshow