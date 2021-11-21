import React from 'react';
import { Container,Row,Col,InputGroup,Dropdown, FormControl,DropdownButton,Button } from 'react-bootstrap';
import '../assets/style/Mainhero.css'

const Mainhero = () => {
    return (
        <div>
            {/*<Container fluid className="mt-3 main-hero-body
            ">
              <Row className="d-flex flex-column main-hero-body">
                  <Col>
                  <p  className="h3 text-center mt-5">ADVENTURE IS WORTHWHILE.</p>
                  </Col>
              </Row>
              <Col>
              <div className="d-flex">
                  <p className="h4">Find your next Destination</p>

                  <InputGroup className="mb-3">
    <FormControl aria-label="Text input with dropdown button" placeholder="Select Year" />
    <DropdownButton

      variant="outline-secondary"
      id="segmented-button-dropdown-2"
      alignRight
    >
      <Dropdown.Item href="#">2021</Dropdown.Item>
      <Dropdown.Item href="#">2022</Dropdown.Item>
      
     </DropdownButton>
    </InputGroup>
                  </div>
     
              </Col>


              <Col>
              <div className="d-flex">
                  <p className="h4">Find your next Destination</p>

                  <InputGroup className="mb-3">
    <FormControl aria-label="Text input with dropdown button" placeholder="Select Year" />
    <DropdownButton
    
      variant="outline-secondary"
      id="segmented-button-dropdown-2"
      alignRight
    >
      <Dropdown.Item href="#">2021</Dropdown.Item>
      <Dropdown.Item href="#">2022</Dropdown.Item>
      
     </DropdownButton>
    </InputGroup>
                  </div>
     
              </Col>

            </Container>
    */}

    <Container fluid className="main-hero-body d-flex flex-column align-items-center justify-content-center">
        
            <Row>
                <p className="h2 text-center mt-5">ADVENTURE IS WORTHWHILE</p>

            </Row>
        <Row className="mt-5 d-flex">
            <Col> 
            
            <p className="h4">Find your next Destination</p>
            </Col>
            <Col>
            <InputGroup className="mb-3">
    <FormControl aria-label="Text input with dropdown button" placeholder="Select Year" />
    <DropdownButton

      variant="outline-secondary"
      id="segmented-button-dropdown-2"
      alignRight
    >
      <Dropdown.Item href="#">2021</Dropdown.Item>
      <Dropdown.Item href="#">2022</Dropdown.Item>
      
     </DropdownButton>
    </InputGroup>
           
 
   
    </Col>
            <Col>
        
            <InputGroup className="mb-3">
    <FormControl aria-label="Text input with dropdown button" placeholder="Select Year" />
    <DropdownButton

      variant="outline-secondary"
      id="segmented-button-dropdown-2"
      alignRight
    >
      <Dropdown.Item href="#">2021</Dropdown.Item>
      <Dropdown.Item href="#">2022</Dropdown.Item>
      
     </DropdownButton>
    </InputGroup>
            </Col>
            <Col>
            <InputGroup className="mb-3">
    <FormControl aria-label="Text input with dropdown button" placeholder="Select Year" />
    <DropdownButton

      variant="outline-secondary"
      id="segmented-button-dropdown-2"
      alignRight
    >
      <Dropdown.Item href="#">2021</Dropdown.Item>
      <Dropdown.Item href="#">2022</Dropdown.Item>
      
     </DropdownButton>
    </InputGroup>
            </Col>
            <Col>
            <InputGroup className="mb-3">
    <FormControl aria-label="Text input with dropdown button" placeholder="Select Year" />
    <DropdownButton

      variant="outline-secondary"
      id="segmented-button-dropdown-2"
      alignRight
    >
      <Dropdown.Item href="#">2021</Dropdown.Item>
      <Dropdown.Item href="#">2022</Dropdown.Item>
      
     </DropdownButton>
    </InputGroup>
            </Col>
            <Col>
            <InputGroup className="mb-3">
    <FormControl aria-label="Text input with dropdown button" placeholder="Select Year" />
    <DropdownButton

      variant="outline-secondary"
      id="segmented-button-dropdown-2"
      alignRight
    >
      <Dropdown.Item href="#">2021</Dropdown.Item>
      <Dropdown.Item href="#">2022</Dropdown.Item>
      
     </DropdownButton>
    </InputGroup>
            

            </Col>
            <Col>
            <Button>Submit</Button>
            </Col>
        </Row>
    </Container>
        </div>
    )

}

export default Mainhero