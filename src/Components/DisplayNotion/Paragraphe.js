import React, { useContext } from 'react'
import {Card, Row, Col, ButtonGroup} from 'react-bootstrap'

import { ParagraphesContext } from '../../store/ParagraphesContext'
import ButtonDown from '../ui/ButtonDown'
import ButtonTrash from '../ui/ButtonTrash'
import ButtonUp from '../ui/ButtonUp'

const Paragraphe = ({paragraphe}) => {

  const paragraphesCtx = useContext(ParagraphesContext)

  return (
    <Card className='my-3 p-3 border-dark'>
        <Row>
          <Col md={10}>
            <h4>{paragraphe.subtitle}</h4>
            <p>{paragraphe.text}</p>
            <p>Url de l'image d'illustration : {paragraphe.imageUrl}</p>
          </Col>
          <Col  md={2} className='d-flex justify-content-end '>
            <ButtonGroup vertical>
                <ButtonUp onClick={()=>{paragraphesCtx.upParagraphe(paragraphe)}}/>
                <ButtonTrash onClick={()=>{paragraphesCtx.deleteParagraphe(paragraphe.id)}}/>
                <ButtonDown onClick={()=>{paragraphesCtx.downParagraphe(paragraphe)}}/>
            </ButtonGroup>
          </Col>
        </Row>
        
    </Card>
  )
}

export default Paragraphe