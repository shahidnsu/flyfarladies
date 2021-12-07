
import React from "react";
import { Card } from "react-bootstrap";
import featureJob from '../assets/images/featureJob.jpeg';
import checklist from '../assets/images/checklist.svg';
import '../assets/style/jobsectioncard.css';

const Jobsectioncard =({name,number}) => {
    return (

        <div>
             <Card  className ="shadow"style={{ width: '20rem' ,height : '27rem'}}>
       <Card.Img variant="top" src={featureJob} style={{
         height: '100%'
       }} />
         <Card.Body className="job-section-details">
         
          
           
    <div className="d-flex justify-content-between  ">

    <div>

        <p className="job-section-details-text "> {name}  </p>
        <p className="job-section-details-text ">{number} Jobs</p>
        

        </div>

        <div >

        <p className="mt-2 h5 job-section-details-text">  <img src={checklist} alt="checklist" style= {{
          width: '40px'
        }} /></p>
        

        </div>


    </div>
    
  </Card.Body>
</Card>

        </div>

    )
}
export default Jobsectioncard;