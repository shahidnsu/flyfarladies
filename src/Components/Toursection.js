import { faCircleNotch,  faUsers } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container,Row,Col,Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import test from "../assets/images/test.jpeg"

const Toursection = () => {

    return (
        <div>

            <Container fluid >
            <Row className="ms-5 mt-5">
            <Col className="d-flex flex-column align-items-center">
                <p className="h1 mt-2">Most Popular Tours</p>
                <p className="h5 text-secondary mt-4 text-center fs-3 lh-2">Check out the Most Popular Tours deals below to book your holiday for the best price! Various promotions run throughout the year, so keep an eye out to bag the hottest of bargains for unforgettable experiences.
                </p>
                </Col>
                </Row>

            </Container>


         {/* card elements starts from here */}

         <Container fluid >
             <Row className="mt-5">
                 <Col>
                 <Card style={{ width: '18rem' ,height : '32rem'}}>
       <Card.Img variant="top" src={test} />
         <Card.Body>
         <div className="d-flex justify-content-between">

         <Card.Title>Ankara</Card.Title>
         <p className="h4">$195.00</p>
         </div>
          
           <Card.Text>
             Explore Turkey in the most beautiful way
       </Card.Text>
    <div className="d-flex justify-content-between">
        <div class="d-flex justify-content-start">

        <p className="mt-2 h5"><FontAwesomeIcon icon ={faCircleNotch} size="1x" /> 5 days tour </p>
        

        </div>

        <div class="d-flex justify-content-start">

        <p className="mt-2 h5"><FontAwesomeIcon icon ={faUsers} size="1x" /> 20 person </p>
        

        </div>


    </div>
  </Card.Body>
</Card>
                 </Col>
             

             <Col>
                 <Card style={{ width: '18rem' ,height : '32rem'}}>
       <Card.Img variant="top" src={test} />
         <Card.Body>
         <div className="d-flex justify-content-between">

         <Card.Title>Ankara</Card.Title>
         <p className="h4">$195.00</p>
         </div>
          
           <Card.Text>
             Explore Turkey in the most beautiful way
       </Card.Text>
    <div className="d-flex justify-content-between">
        <div class="d-flex justify-content-start">

        <p className="mt-2 h5"><FontAwesomeIcon icon ={faCircleNotch} size="1x" /> 5 days tour </p>
        

        </div>

        <div class="d-flex justify-content-start">

        <p className="mt-2 h5"><FontAwesomeIcon icon ={faUsers} size="1x" /> 20 person </p>
        

        </div>


    </div>
  </Card.Body>
</Card>
                 </Col>

                 <Col>
                 <Card style={{ width: '18rem' ,height : '32rem'}}>
       <Card.Img variant="top" src={test} />
         <Card.Body>
         <div className="d-flex justify-content-between">

         <Card.Title>Ankara</Card.Title>
         <p className="h4">$195.00</p>
         </div>
          
           <Card.Text>
             Explore Turkey in the most beautiful way
       </Card.Text>
    <div className="d-flex justify-content-between">
        <div class="d-flex justify-content-start">

        <p className="mt-2 h5"><FontAwesomeIcon icon ={faCircleNotch} size="1x" /> 5 days tour </p>
        

        </div>

        <div class="d-flex justify-content-start">

        <p className="mt-2 h5"><FontAwesomeIcon icon ={faUsers} size="1x" /> 20 person </p>
        

        </div>


    </div>
  </Card.Body>
</Card>
                 </Col>
                 

                 </Row>



         </Container>


        </div>
    )


}
export default Toursection