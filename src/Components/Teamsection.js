import React  from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import '../assets/style/Teamsection.css';
import test from '../assets/images/test.jpeg';

const Teamsection = () => {

    const Teamsection = <Container fluid className="mt-4">
        <Row>
            <Col className="justify-content-sm-center">
                <p className="team-section-title">Meet our Core Team</p>
            </Col>
        </Row>

        <Row>
            
                <Carousel
                variant indicators = {false}
                    controls ={false}>
                    <Carousel.Item>
                    <div className="d-flex ">

                    
                    <div className="d-flex flex-column align-items-center  border   shadow    col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <img  className ="w-100" src={test} alt="first slide " />
                    <p className="team-member-heading align-self-start ms-2">Samia Akter</p>
                    <p className="team-member-position align-self-start ms-2">Accounts officer</p>
                    </div>
                    


                    <div className="d-flex flex-column align-items-center border  ms-2 shadow col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <img  className ="w-100 border" src={test} alt="first slide" />
                    <p className="team-member-heading align-self-start ms-2">Samia Akter</p>
                    <p className="team-member-position align-self-start ms-2">Accounts officer</p>
                    </div>

                    <div className="d-flex flex-column align-items-center border ms-2 shadow col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <img  className ="w-100" src={test} alt="first slide" />
                    <p className="team-member-heading align-self-start ms-2">Samia Akter</p>
                    <p className="team-member-position align-self-start ms-2">Accounts officer</p>
                    </div>
                    <div className="d-flex flex-column align-items-center border ms-2 align-items-center shadow col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <img  className ="w-100" src={test} alt="first slide" />
                    <p className="team-member-heading align-self-start ms-2">Samia Akter</p>
                    <p className="team-member-position align-self-start ms-2">Accounts officer</p>
                    </div>

                    </div>

                    </Carousel.Item>


                    <Carousel.Item>
                    <div className="d-flex">


                    <div className="d-flex flex-column align-items-center border   shadow   col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <img  className ="w-100" src={test} alt="first slide " />
                    <p className="team-member-heading align-self-start ms-2">Samia Akter</p>
                    <p className="team-member-position align-self-start ms-2">Accounts officer</p>
                    </div>


                    <div className="d-flex flex-column align-items-center border  ms-2 shadow col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <img  className ="w-100 border" src={test} alt="first slide" />
                    <p className="team-member-heading align-self-start ms-2">Samia Akter</p>
                    <p className="team-member-position align-self-start ms-2">Accounts officer</p>
                    </div>

                    <div className="d-flex flex-column align-items-center border ms-4 shadow col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <img  className ="w-100" src={test} alt="first slide" />
                    <p className="team-member-heading align-self-start ms-2">Samia Akter</p>
                    <p className="team-member-position align-self-start ms-2">Accounts officer</p>
                    </div>
                    <div className="d-flex flex-column align-items-center border ms-4 align-items-center shadow col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <img  className ="w-100" src={test} alt="first slide" />
                    <p className="team-member-heading align-self-start ms-2">Samia Akter</p>
                    <p className="team-member-position align-self-start ms-2">Accounts officer</p>
                    </div>

                    </div>

                    </Carousel.Item>
                </Carousel>
            
        </Row>
    </Container>


    return (
        <div>
        {Teamsection}

        </div>
    )
}
export default Teamsection;