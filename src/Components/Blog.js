import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/style/Blog.css";
import blogImage from '../assets/images/BlogImage.jpeg'

export default function Blog() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <p className="text-center blog-section-heading">Our Blogs</p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col >
            <Card style={{ width: "22rem", height:"23rem"}} className="shadow" >
              <Card.Img variant="top" src={blogImage} />
              <Card.Body>
                
                <Card.Text >
                <p className="blog-section-text">10 BEST DAY TRIPS FROM DHAKA</p>
                  <p className="blog-section-date">November 10, 2021</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "22rem", height: "23rem" }} className="shadow">
              <Card.Img variant="top" src={blogImage} />
              <Card.Body>
               
                <Card.Text>
                <p className="blog-section-text"> BEST TURKEY  TOUR PACKAGES FROM BANGLADESH</p>
                  <p className="blog-section-date">October 25, 2021</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "22rem", height: "23rem" }} className="shadow">
              <Card.Img variant="top" src={blogImage} />
              <Card.Body>
                
                <Card.Text>
                  <p className="blog-section-text">THREE YEARS OF FLYING HIGH WITH FLY FAR LADIES</p>
                  <p className="blog-section-date">October 03, 2021</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
