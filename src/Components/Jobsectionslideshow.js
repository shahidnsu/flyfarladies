import {  } from "bootstrap";
import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Jobsectioncard from "./Jobsectioncard";


const Jobsectionslideshow = () => {
    return (
        <div>
        <Row className="mt-5 ms-2 d-flex">
            <Col>
                <Jobsectioncard name="accounting" number="2" />

            </Col>
            <Col>
                <Jobsectioncard name="Presenter" number= "3" />
            </Col>
            <Col>
                <Jobsectioncard name="developer" number ="4" />
            </Col>
        </Row>


        </div>
        
        
    )
    }
    export default Jobsectionslideshow