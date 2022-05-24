import React, {useContext} from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../store/AuthContext'
import NavBrand from './NavBrand'

const MyNavbar = () => {

    const authCtx = useContext(AuthContext)

    const navigation = useNavigate()

    return (
        <>
            <NavBrand/>
            <Navbar sticky="top" bg="primary" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=>{navigation('/addNotion')}}>Ajouter notions</Nav.Link>
                        <Nav.Link onClick={()=>{navigation('/editNotion')}}>Editer notions</Nav.Link>
                        <Nav.Link onClick={()=>{authCtx.logout()}} href="#">Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default MyNavbar