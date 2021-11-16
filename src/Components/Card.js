import React from "react";
import { faCircleNotch,  faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import test from "../assets/images/test.jpeg"
import {Row,Col,Card}  from "react-bootstrap";

const card = ({des, price, day,people}) => {

    return(
        <div>

      <Row className="mt-5 ms-3">
                 <Col sm={12}>
                 <Card style={{ width: '18rem' ,height : '32rem'}}>
       <Card.Img variant="top" src={test} />
         <Card.Body>
         <div className="d-flex justify-content-between">

         <Card.Title>{des}</Card.Title>
         <p className="h4">{price}</p>
         </div>
          
           <Card.Text>
             Explore Turkey in the most beautiful way
       </Card.Text>
    <div className="d-flex justify-content-between">
        <div class="d-flex justify-content-start">

        <p className="mt-2 h5"><FontAwesomeIcon icon ={faCircleNotch} size="1x" /> {day} days tour </p>
        

        </div>

        <div class="d-flex justify-content-start">

        <p className="mt-2 h5"> <FontAwesomeIcon icon ={faUsers} size="1x" />{people} persons </p>
        

        </div>


    </div>
  </Card.Body>
</Card>
                 </Col>
                 </Row>
             


        </div>
    )
}
export default card;