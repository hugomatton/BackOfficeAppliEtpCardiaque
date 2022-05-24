import React, { useState } from 'react'
import { Form, Card, Button } from 'react-bootstrap'
import FormAddParagraphe from './FormAddParagraphe'
import axios from 'axios'

const FormEditNotion = ({ notionToEdit, setNotionToEdit, onUpdate }) => {

  const [addParagraphe, setAddParagraphe] = useState(false)

  function handleChange(event) {
    let currentState = {...notionToEdit}
    currentState[event.target.name] = event.target.value
    setNotionToEdit(currentState)
  }


  function handleChangeParagraphe(event){
    const idPara = event.target.id
    const para = notionToEdit.paragraphes.filter((para)=>para.id === idPara)[0]
    const indexPara = notionToEdit.paragraphes.indexOf(para)
    para[event.target.name] = event.target.value
    let currentState = {...notionToEdit}
    currentState.paragraphes[indexPara] = para
    setNotionToEdit(currentState)
  }

  function handleAddParagraphe(paragraphe){
    let currentState = {...notionToEdit}
    currentState.paragraphes.push({id: Math.random() + Math.random(), ...paragraphe})
    setNotionToEdit(currentState)
  }

  function onSubmit(){
    onUpdate()
  }

  return (
    <Form>
      <h2 className='px-3 mt-2'>Editer la notion {notionToEdit.title}</h2>
      <Form.Group className='p-3'>
        <Form.Label>Titre de la notion</Form.Label>
        <Form.Control 
          type="text" 
          name="title" 
          value={notionToEdit.title} 
          onChange={handleChange} 
        />
      </Form.Group>
      <h3 className='p-3'>Les paragraphes de la notion</h3>
      {notionToEdit.paragraphes.map((paragraphe)=>
        <Card key={paragraphe.id} className='m-3 p-3'>
          <Form.Group>
            <Form.Label>Titre du paragraphe</Form.Label>
            <Form.Control type="text" id={paragraphe.id} name='subtitle' value={paragraphe.subtitle} onChange={handleChangeParagraphe}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Texte</Form.Label>
            <Form.Control as="textarea" rows={3} id={paragraphe.id} name='text' value={paragraphe.text} onChange={handleChangeParagraphe}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Url de l'image d'illustration</Form.Label>
            <Form.Control type="text" id={paragraphe.id} name='imageUrl' value={paragraphe.imageUrl} onChange={handleChangeParagraphe}/>
          </Form.Group>
        </Card>
      )}
      <div className='p-3'>
        <Button 
          variant='outline-primary'
          onClick={()=>{setAddParagraphe(!addParagraphe)}}
        >
          {addParagraphe? 'Fermer' : 'Ajouter un paragraphe à la notion'}
        </Button> 
      </div> 
      {
        addParagraphe && <FormAddParagraphe onAddParagraphe={handleAddParagraphe} setAddParagraphe={setAddParagraphe}/>
      }
       <Button className='mx-3 mb-3' onClick={onSubmit}>Confirmer modifications</Button>
    </Form>
  )
}

export default FormEditNotion