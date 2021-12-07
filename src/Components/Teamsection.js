import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import "../assets/style/Teamsection.css";

import employee from "../assets/images/employee.jpeg";
import employee1 from "../assets/images/employee1.jpeg";
import employee2 from "../assets/images/employee2.jpeg";
import employee3 from "../assets/images/employee3.jpeg";
import employee4 from "../assets/images/employee4.jpeg";
import employee5 from "../assets/images/employee5.jpeg";

const Teamsection = () => {
  return (
      <>
    <Container fluid className="mt-4">
      <Row>
        <Col className="justify-content-sm-center">
          <p className="team-section-title">Meet our Core Team</p>
        </Col>
      </Row>

      <Row>
        <Carousel variant indicators={false} controls={false}>
          <Carousel.Item>
            <div className="d-flex ">
              <div className="d-flex flex-column align-items-center  border   shadow    col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <img className="w-100" src={employee5} alt="first slide " />
                <div className="employee-section-content-box">
                  <p className="team-member-heading align-self-start ms-2 employee-section-heading">
                    Samia Akter
                  </p>
                  <p className="team-member-position align-self-start ms-2">
                    Accounts officer
                  </p>
                </div>
              </div>

              <div className="d-flex flex-column align-items-center border  ms-2 shadow col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <img
                  className="w-100 border"
                  src={employee1}
                  alt="first slide"
                />

                <div className="employee-section-content-box">
                  <p className="team-member-heading align-self-start ms-2 employee-section-heading">
                    Samia Akter
                  </p>
                  <p className="team-member-position align-self-start ms-2">
                    Accounts officer
                  </p>
                </div>
              </div>

              <div className="d-flex flex-column align-items-center border ms-2 shadow col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <img className="w-100" src={employee2} alt="first slide" />

                <div className="employee-section-content-box">
                  <p className="team-member-heading align-self-start ms-2 employee-section-heading">
                    Samia Akter
                  </p>
                  <p className="team-member-position align-self-start ms-2">
                    Accounts officer
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center border ms-2 align-items-center shadow col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <img className="w-100" src={employee2} alt="first slide" />
                <div className="employee-section-content-box">
                  <p className="team-member-heading align-self-start ms-2 employee-section-heading">
                    Samia Akter
                  </p>
                  <p className="team-member-position align-self-start ms-2">
                    Accounts officer
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex">
              <div className="d-flex flex-column align-items-center border   shadow   col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <img className="w-100" src={employee} alt="first slide " />
                <div className="employee-section-content-box">
                  <p className="team-member-heading align-self-start ms-2 employee-section-heading">
                    Samia Akter
                  </p>
                  <p className="team-member-position align-self-start ms-2">
                    Accounts officer
                  </p>
                </div>
              </div>

              <div className="d-flex flex-column align-items-center border  ms-2 shadow col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <img
                  className="w-100 border"
                  src={employee4}
                  alt="first slide"
                />
                <div className="employee-section-content-box">
                  <p className="team-member-heading align-self-start ms-2 employee-section-heading">
                    Samia Akter
                  </p>
                  <p className="team-member-position align-self-start ms-2">
                    Accounts officer
                  </p>
                </div>
              </div>

              <div className="d-flex flex-column align-items-center border ms-4 shadow col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <img className="w-100" src={employee3} alt="first slide" />
                <div className="employee-section-content-box">
                  <p className="team-member-heading align-self-start ms-2 employee-section-heading">
                    Samia Akter
                  </p>
                  <p className="team-member-position align-self-start ms-2">
                    Accounts officer
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center border ms-4 align-items-center shadow col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <img className="w-100" src={employee5} alt="first slide" />
                <div className="employee-section-content-box">
                  <p className="team-member-heading align-self-start ms-2 employee-section-heading">
                    Samia Akter
                  </p>
                  <p className="team-member-position align-self-start ms-2">
                    Accounts officer
                  </p> 
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
    </>
  );
  

  

  
};
export default Teamsection;
