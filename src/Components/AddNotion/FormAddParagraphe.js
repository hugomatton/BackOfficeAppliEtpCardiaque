import React, {useContext, useState} from 'react'
import { Button, Form, Card } from 'react-bootstrap'
import { ParagraphesContext } from '../../store/ParagraphesContext'

const FormAddParagraphe = () => {

    const paragraphesCtx = useContext(ParagraphesContext)

    const [paragraphe, setParagraphe] = useState({
        subtitle: '',
        text: '',
        imageUrl: ''
    })

    function handleChange(event){
        let currentState = {...paragraphe}
        currentState[event.target.name] = event.target.value
        setParagraphe(currentState)
    }

    function addParagrapheHandler(event){
        event.preventDefault()
        //TODO --> check valid data

        //on met à jour le contexte
        paragraphesCtx.addParagraphe({...paragraphe, id: Math.random().toString() + Math.random().toString()})
        //on met à jour l'objet notion
        setParagraphe({subtitle: '', text: '', imageUrl: ''})
    }

    return (
        <Card className='my-4'>
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
            <Button variant="secondary" className='m-2' onClick={addParagrapheHandler}>Ajouter paragraphe</Button>
        </Card>
    )
}

export default FormAddParagraphe