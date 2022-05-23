import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const MyNavbar = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Education thérapeuthique pour l'insuffisance cardiaque</Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar sticky="top" bg="primary" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Ajouter notions</Nav.Link>
                        <Nav.Link href="#features">Editer notions</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default MyNavbar