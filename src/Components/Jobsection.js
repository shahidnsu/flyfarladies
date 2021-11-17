import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Jobsectionslideshow from './Jobsectionslideshow';

const Jobsection = () => 
{
    return (
        <div>

            <Container fluid>
            <Row className="mt-5 me-5">
            <Col>

                <p className="h4 text-center">Employee Offering job</p>
                <p className="h1 text-center">Here's Features Job</p>
                </Col>
                </Row>
            </Container>
            

            <Jobsectionslideshow />
            
            

            
        </div>
    )
}

export default Jobsection