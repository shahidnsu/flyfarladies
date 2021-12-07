import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Jobsectioncard from "./Jobsectioncard";

import Slideshow from "./Slideshow";

const Jobsection = () => {
  return (
    <>
      <Container fluid>
        <Row className="mt-5  ">
          <Col>
            <p
              className=" text-center"
              style={{
                fontSize: "16px",
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              Employee Offering job
            </p>
            <p
              className=" text-center"
              style={{
                fontSize: "32px",
                textAlign: "center",
                fontWeight: "700",
              }}
            >
              Here's Features Job
            </p>
          </Col>
        </Row>
      </Container>

      <Slideshow item={<Jobsectioncard name="Accounting" number="5" />} />
    </>
  );
};

export default Jobsection;
