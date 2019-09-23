import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './customnavbar.css'
export class CustomNavbar extends React.Component {
    
    render(){
        return (<Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Jimmy Chen</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/" className="nav-link">Home</Nav.Link>
                <Nav.Link href="/aboutme" className="nav-link">About Me</Nav.Link>
                <Nav.Link href="/images" className="nav-link">Image Porfolio</Nav.Link>
                <Nav.Link href="/musicalify" className="nav-link">Musicalify</Nav.Link>
            </Nav>
        </Navbar>);
    }
    
}