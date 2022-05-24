import React from 'react'
import { Container } from 'react-bootstrap'

import LoginForm from '../Components/Login/LoginForm'

const LoginScreen = () => {
  return (
    <Container style={{height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <LoginForm/>
    </Container>
  )
}

export default LoginScreen