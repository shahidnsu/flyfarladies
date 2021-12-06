import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/style/Blog.css";
import blogImage from '../assets/images/BlogImage.jpeg'

export default function Blog() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1 className="text-center blog-section-heading">Our Blogs</h1>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <Card style={{ width: "22rem", height:"23rem"}} className="shadow" >
              <Card.Img variant="top" src={blogImage} />
              <Card.Body>
                
                <Card.Text >
                <h2 className="blog-section-text">10 BEST DAY TRIPS FROM DHAKA</h2>
                  <span className="blog-section-date">November 10, 2021</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col  >
            <Card style={{ width: "22rem", height: "23rem" }} className="shadow">
              <Card.Img variant="top" src={blogImage} />
              <Card.Body>
               
                <Card.Text>
                <h2 className="blog-section-text"> BEST TURKEY  TOUR PACKAGES FROM BANGLADESH</h2>
                  <span className="blog-section-date">October 25, 2021</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col  >
            <Card style={{ width: "22rem", height: "23rem" }} className="shadow">
              <Card.Img variant="top" src={blogImage} />
              <Card.Body>
                
                <Card.Text>
                  <h2 className="blog-section-text">THREE YEARS OF FLYING HIGH WITH FLY FAR LADIES</h2>
                  <span className="blog-section-date">October 03, 2021</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
