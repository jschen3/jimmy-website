import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './customnavbar.css'
export class CustomNavbar extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (<Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Jimmy Chen</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/home" className="nav-link">Home</Nav.Link>
                <Nav.Link href="/aboutme" className="nav-link">About Me</Nav.Link>
            </Nav>
        </Navbar>);
    }
    
}