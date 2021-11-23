
import React from "react";
import { Card } from "react-bootstrap";
import test from '../assets/images/test.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import '../assets/style/jobsectioncard.css';

const Jobsectioncard =({name,number}) => {
    return (

        <div>
             <Card  className ="shadow"style={{ width: '20rem' ,height : '27rem'}}>
       <Card.Img variant="top" src={test} />
         <Card.Body className="job-section-details">
         
          
           
    <div className="d-flex justify-content-between  ">

    <div>

        <p className="job-section-details-text "> {name}  </p>
        <p className="job-section-details-text ">{number} Jobs</p>
        

        </div>

        <div >

        <p className="mt-2 h5 job-section-details-text">  <FontAwesomeIcon icon={faBookmark} size="2x"/></p>
        

        </div>


    </div>
    
  </Card.Body>
</Card>

        </div>

    )
}
export default Jobsectioncard;