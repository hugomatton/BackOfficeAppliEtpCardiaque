import React, { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'

const FormAddParagraphe = ({onAddParagraphe, setAddParagraphe}) => {

    const [paragraphe, setParagraphe] = useState({subtitle:'',text:'',imageUrl:''})

    function handleChange(event){
        let currentState = {...paragraphe}
        currentState[event.target.name] = event.target.value
        setParagraphe(currentState)
    }

    function onSubmit(){
        onAddParagraphe(paragraphe)
        setParagraphe({subtitle:'',text:'',imageUrl:''})
        setAddParagraphe(false)
    }

    return (
        <div className='p-3'>
            <Card>
                <h4 className='m-2 text-center text-secondary'>Ajouter des paragraphes à la notion</h4>
                <Form.Group className='m-2'>
                    <Form.Label>Titre du paragraphe :</Form.Label>
                    <Form.Control type="text" name="subtitle" id="subtitle" value={paragraphe.subtitle} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className='m-2'>
                    <Form.Label>Contenu du paragraphe :</Form.Label>
                    <Form.Control as="textarea" rows={3} name="text" id="text" value={paragraphe.text} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className='m-2'>
                    <Form.Label>Url de l'image d'illustration :</Form.Label>
                    <Form.Control type="text" name="imageUrl" id="imageUrl" value={paragraphe.imageUrl} onChange={handleChange}/>
                </Form.Group>
                <Button variant="secondary" className='m-2' onClick={onSubmit}>Ajouter paragraphe</Button>
            </Card>
        </div>

    )
}

export default FormAddParagraphe