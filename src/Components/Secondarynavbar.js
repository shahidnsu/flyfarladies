import React from "react";
import { Container,Navbar,Nav,NavDropdown } from "react-bootstrap";
import '../assets/style/Secondarynavbar.css';
import logo  from '../assets/images/logo.png';
import {Link} from 'react-router-dom';

const Secondarynavbar = () =>
{
  return (
    
     <div>

   
   <Navbar  expand="lg" className="sticky-top">
  <Container fluid className="mt-3 ps-5">
    <Navbar.Brand  className ="text-dark h5" href="#home"><img src={logo} alt="logo" /> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto ">
      <Nav.Link    as ={Link} to="/" className="text-dark h5 nav-link-a" >Home</Nav.Link>

        <Nav.Link  as ={Link} to="/gallery" className="text-dark h5 nav-link-a">Gallery</Nav.Link> 
        <Nav.Link  className="text-dark h5 nav-link-a" href="#stockPhotos">Stock Photos</Nav.Link>
        <Nav.Link  as ={Link} to ="/job"className="text-dark h5 nav-link-a" href="#job">Job</Nav.Link>
        <Nav.Link  className="text-dark h5 nav-link-a" href="#blog">Blog</Nav.Link>
        <Nav.Link  className="text-dark h5 nav-link-a" href="#packages">Packages</Nav.Link>
        <Nav.Link className="text-dark  h5 nav-link-a" href="#travel">Travel</Nav.Link>
        <NavDropdown title="Travel Shopping" id="basic-nav-dropdown" className="text-dark h5 nav-link-a">
          <NavDropdown.Item className="text-dark h5" href="#action/3.1">Swim suits</NavDropdown.Item>
          <NavDropdown.Item  className="text-dark h5" href="#action/3.2">Mask</NavDropdown.Item>
          <NavDropdown.Item className="text-dark h5" href="#action/3.3">Poster</NavDropdown.Item>
          
          <NavDropdown.Item className="text-dark h5" href="#action/3.4">Sight Bad</NavDropdown.Item>
          <NavDropdown.Item className="text-dark h5" href="#action/3.4">Passport Holder</NavDropdown.Item>
          <NavDropdown.Item className="text-dark h5" href="#action/3.4">DFBDZ</NavDropdown.Item>
        </NavDropdown>

        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>



</div> 



      
  )
}
export default Secondarynavbar;