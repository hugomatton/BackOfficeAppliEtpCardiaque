import React, { useState, useContext } from 'react'
import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import axios from 'axios'

import logoChu from '../../assets/images/logo-chu-montpellier.jpg'
import { AuthContext } from '../../store/AuthContext'

const LoginForm = () => {

    const authCtx = useContext(AuthContext)

    const [userData, setUserData] = useState({
        email: '',
        password: '',
        returnSecureToken: true
    })

    function handleChange(event){
        event.preventDefault()
        let currentState = {...userData}
        currentState[event.target.name] = event.target.value
        setUserData(currentState)
    }

    async function onSubmit(){
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDcznhGoTw9lLwTybOTGA-qehqdcb79954'
        const response = await axios.post(url, userData)
        const token = response.data.idToken
        authCtx.authenticate(token)
    }

    return (
        <Container className=' w-75'>
            <Row>
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Label>Adresse email</Form.Label>
                            <Form.Control onChange={handleChange} name='email' type='email' value={userData.email}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control onChange={handleChange} name='password' type='password' value={userData.password}/>
                        </Form.Group>
                        <Button className='my-3' onClick={onSubmit} variant="primary">Valider</Button>
                    </Form>
                </Col>
                <Col>
                    <img style={{height: '200px', width: 'auto'}} alt="logo chu" src={logoChu}/>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginForm