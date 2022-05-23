import React, { useState, useContext } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import axios from 'axios'

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
        console.log(userData)
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDcznhGoTw9lLwTybOTGA-qehqdcb79954'
        const response = await axios.post(url, userData)
        const token = response.data.idToken
        authCtx.authenticate(token)
    }

    return (
        <Container >
            <Form>
                <Form.Group>
                    <Form.Label>Adresse email</Form.Label>
                    <Form.Control onChange={handleChange} name='email' type='email' value={userData.email}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control onChange={handleChange} name='password' type='password' value={userData.password}/>
                </Form.Group>
                <Button onClick={onSubmit} variant="primary">Valider</Button>
            </Form>
        </Container>
    )
}

export default LoginForm