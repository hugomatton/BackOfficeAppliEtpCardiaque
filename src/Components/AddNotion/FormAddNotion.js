import React from 'react'
import { Form } from 'react-bootstrap'

import FormAddParagraphe from './FormAddParagraphe'

const FormAddNotion = ({handleChange, setNotion, notion}) => {


    return (
        <div>
            <h2 className='text-center m-2 text-primary text-uppercase'>Ajouter une notion</h2>
            <Form>
                <Form.Group className="m-2">
                    <Form.Label>Titre de la notion : </Form.Label>
                    <Form.Control type="text" name="title" id="title" value={notion.title} onChange={handleChange}/>
                </Form.Group>
                <FormAddParagraphe />
            </Form>
        </div>
    )
}

export default FormAddNotion