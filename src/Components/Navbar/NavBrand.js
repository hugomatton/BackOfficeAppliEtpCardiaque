import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const NavBrand = () => {
  return (
    <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand >Education thérapeuthique pour l'insuffisance cardiaque</Navbar.Brand>
        </Container>
    </Navbar>
  )
}

export default NavBrand