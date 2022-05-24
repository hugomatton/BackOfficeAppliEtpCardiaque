import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import { Container, Col, Row, Card, Button } from 'react-bootstrap'

import FormAddNotion from '../Components/AddNotion/FormAddNotion'
import DisplayNotion from '../Components/AddNotion/DisplayNotion/DisplayNotion'

import { ParagraphesContext } from '../store/ParagraphesContext'
import { AuthContext } from '../store/AuthContext'

const AddNotionScreen = () => {

  const paragraphesCtx = useContext(ParagraphesContext)
  const token = useContext(AuthContext).token

  const [notion, setNotion] = useState({
    title: '',
    paragraphes: paragraphesCtx.paragraphes
  })
  
  //Pour actualiser les paragraphes de la notion quand le contexte change
  useEffect(()=>{
    const paragraphes = paragraphesCtx.paragraphes
    const currentNotion = {...notion}
    currentNotion.paragraphes = paragraphes
    setNotion(currentNotion)
  },[paragraphesCtx])

  /**
   * Gére la cohérence des données entre la variables notion et les champs saisies
   */
  function handleChange(event){
    let currentState = {...notion}
    currentState[event.target.name] = event.target.value
    setNotion(currentState)
  }

  /**
   * Envoie une nouvelle notion dans la bdd
   */
  async function postNotion(event){
    event.preventDefault()
    await axios.post('https://etpchu-default-rtdb.firebaseio.com/competences.json?auth='+token, notion)
    setNotion({title:'', paragraphes: []})
    paragraphesCtx.setParagraphes([])
  }

  return (
    
    <Container>
      <Row>
        <Col md={5}>
          <Card className='m-3 p-3'>
            <FormAddNotion handleChange={handleChange} setNotion={setNotion} notion={notion}/>
            <Button onClick={postNotion}>Ajouter la notion</Button>
          </Card>
        </Col>
        <Col md={7}>
          <Card className='m-3 p-3'>
            <DisplayNotion notion={notion}/>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default AddNotionScreen