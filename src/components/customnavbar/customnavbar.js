import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
export class CustomNavbar extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Jimmy Chen</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">About Me</Nav.Link>
            </Nav>
        </Navbar>);
    }
    
}