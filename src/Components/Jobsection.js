import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Jobsectioncard from './Jobsectioncard';

import Slideshow from './Slideshow';

const Jobsection = () => 
{
    return (
        <div>

            <Container fluid>
            <Row className="mt-5 me-5 ">
            <Col>

                <p className="h4 text-center">Employee Offering job</p>
                <p className="h1 text-center">Here's Features Job</p>
                </Col>
                </Row>
            </Container>
            

            <Slideshow item={<Jobsectioncard name="Accounting" number="5"  />} />
            
            

            
        </div>
    )
}

export default Jobsection