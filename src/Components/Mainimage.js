import React from "react";
import { Container,Row,Col, Carousel } from "react-bootstrap";
import '../assets/style/Mainimage.css'
import test from '../assets/images/test.jpeg';


const MainImage =() => {

    return (
        <div>
            <Container fluid>
            <Row className="mt-5 ">
                <Col>
                    <p className="main-image-heading text-center">Stock Images</p>
                    <p className="text-center">The best source of tour stock image in Bangladesh. We collect pictures by professionals. 
                    Check which images are perfect <br></br>for you.
                    </p>
                </Col>
            </Row>
            <Row className="mx-2">
            <Col className="d-flex">
                <Carousel variant 
                indicators={false}
                controls={false}> 
                    <Carousel.Item>
                    <div className="d-flex">
                    <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12 shadow">
                    
                    <img  className ="w-75" src={test} alt="testing purpose"/>

                    </div>


                      <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12 shadow">                   

                    <img  className ="w-75 ms-1" src={test} alt="testing purpose"/>
                    </div>

                    <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12 shadow">

                    <img  className="w-75 ms-1" src={test} alt="testing purpose"/>
                    </div>

                    <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12 shadow">

                    <img  className="w-75 ms-1" src={test} alt="testing purpose"/>
                    </div>
                    </div>

                    </Carousel.Item>


                    <Carousel.Item>
                    <div className="d-flex">
                    <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12 shadow">
                    
                    <img  className ="w-75" src={test} alt="testing purpose"/>

                    </div>


                      <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12 shadow">                   

                    <img  className ="w-75 ms-1" src={test} alt="testing purpose"/>
                    </div>

                    <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12 shadow">

                    <img  className="w-75 ms-1" src={test} alt="testing purpose"/>
                    </div>

                    <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12 shadow">

                    <img  className="w-75 ms-1" src={test} alt="testing purpose"/>
                    </div>
                    </div>

                    </Carousel.Item>

                </Carousel>

                </Col>
            </Row>
            <Row className="mt-4 border-bottom">
                <Col>
                    <p className="text-center">
                        Browse all Stock photos
                    </p>
                </Col>
            </Row>
                
            </Container>
           
        </div>
    )

}
export default MainImage