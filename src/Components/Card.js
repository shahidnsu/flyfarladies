import React from "react";
import { faCircleNotch,  faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import test from "../assets/images/test.jpeg"
import {Card}  from "react-bootstrap";
import '../assets/style/card.css';
const card = ({des, price, day,people}) => {

    return(
        <>

      
                 <Card className="shadow " style={{ width: '20rem' ,height : '30rem'}}>
       <Card.Img variant="top" src={test} />
         <Card.Body>
         <div className="d-flex justify-content-between">

         <Card.Title>{des}</Card.Title>
         <p className="card-text">{price}</p>
         </div>
          
           <Card.Text>
             Explore Turkey in the most beautiful way
       </Card.Text>
    <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-start">

        <p className="mt-2 h5"><FontAwesomeIcon icon ={faCircleNotch} size="1x" /> {day} days tour </p>
        

        </div>

        <div className="d-flex justify-content-start">

        <p className="mt-2 h5"> <FontAwesomeIcon icon ={faUsers} size="1x" />{people} persons </p>
        

        </div>


    </div>
  </Card.Body>
</Card>
                 
             


        </>
    )
}
export default card;