import React from 'react'
import { Button, Card } from 'react-bootstrap'

const NotionCard = ({notion, onDelete, setNotionToEdit, setIsEditing}) => {

  function onEdit(){
    setNotionToEdit(notion)
    setIsEditing(true)
  }

  return (
    <Card style={{width: '275px'}} className='m-3'>
        <Card.Body>
            <Card.Title className='text-capitalize'>{notion.title}</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>{notion.paragraphes.length} paragraphes</Card.Subtitle>
        </Card.Body>
        <Card.Footer className='d-flex align-items-center justify-content-between'>
            <Button onClick={onEdit} variant='outline-primary'>Modifier</Button>
            <Button onClick={onDelete.bind(this, notion.id)} variant='outline-danger'>Supprimer</Button>
        </Card.Footer>
    </Card>
  )
}

export default NotionCard