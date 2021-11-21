
import React from "react";
import { Card } from "react-bootstrap";
import test from '../assets/images/test.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const Jobsectioncard =({name,number}) => {
    return (

        <div >
             <Card  className ="shadow-lg"style={{ width: '20rem' ,height : '28rem'}}>
       <Card.Img variant="top" src={test} />
         <Card.Body>
         
          
           
    <div className="d-flex justify-content-between">
        <div >

        <p className="mt-2 h5"> {name}  </p>
        <p className="mt-2 h5">{number} Jobs</p>
        

        </div>

        <div >

        <p className="mt-2 h5">  <FontAwesomeIcon icon={faBookmark} size="2x"/></p>
        

        </div>


    </div>
  </Card.Body>
</Card>
        </div>

    )
}
export default Jobsectioncard;