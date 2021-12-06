import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import cart from "../assets/images/cart.svg";
import call from "../assets/images/call.png";
import '../assets/style/topnavbar.css';

const Topnavbar = () => {
  return (
    <Container fluid className="border  bg-light">
      <Row className="p-3">
        <Col
          sm="12"
          xs="12"
          md="6"
          lg="6"
          className="d-flex justify-content-sm-center justify-content-xs-center justify-content-md-start justify-content-lg-start topnavbar-address"
        >
          <img src={call} alt="call" />

          <h5
            className="align-self-center ms-1"
            style={{
              fontSize: "12px",
              fontWeight: "600",
              display: "inline-block",
              color: "#7f899b",
            }}
          >
            0175558211, info@flyfarladies.com
          </h5>
        </Col>
        <Col className="d-flex justify-content-md-end justify-content-lg-end justify-content-sm-end justify-content-xs-end">
          <Button className="rounded-pill border-white" variant="dark">
            Login/Register
          </Button>

          <img src={cart} alt="cart" />
        </Col>
      </Row>
    </Container>
  );
};
export default Topnavbar;
