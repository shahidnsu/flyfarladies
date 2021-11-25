import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import '../assets/style/NewletterSection.css';


const NewsletterSection = () => {

    const Blog= <div>
        <h1>From our Blog</h1>
        <p className="news-letter-content-title">10 Best Day trip from Dhaka</p>
        <p>Days trip can be really effective for coming out form the hectic city life in this modern era.Here we introduce you to some  of the most enchanting places in Bangladesh where you can visit for  your ....</p>

        <p className="mt-5">October 25, 2021 </p>
    </div>

    return (
        <>
        <Container fluid >
            <Row className="mt-5">
            <Col md="6" lg="6" sm="12" className="justify-content-sm-center d-flex ms-2">
            {Blog}

            </Col>
            
            <Col md="5" lg="5" sm="12" className="border shadow news-letter-input-box pt-5 ps-4 pe-4 pb-5 d-flex flex-column  justify-content-sm-center justify-content-md-end justify-content-lg-end">
            <p className="h2">Newsletter</p>
            <input type="text" className ="news-letter-input mt-4" placeholder="Name" required></input>
            <input type="text" className ="news-letter-input" placeholder="Company" ></input>
            <input type="text" className ="news-letter-input" placeholder="E-mail" ></input>
            <input type="text" className ="news-letter-input" placeholder="Website" ></input>
            

            <button className="news-letter-button">SUBSCRIBE</button>
            
            
                
            </Col>
            </Row>

            
        </Container>
        
        </>
    )


}

export default NewsletterSection;