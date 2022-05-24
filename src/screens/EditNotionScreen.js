import React, { useEffect, useState, useContext } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import axios from 'axios'

import NotionCard from '../Components/EditNotion/NotionCard'
import { AuthContext } from '../store/AuthContext'
import FormEditNotion from '../Components/EditNotion/FormEditNotion'

const EditNotionScreen = () => {
    const [notions, setNotions] = useState([])
    const [notionToEdit, setNotionToEdit] = useState({title: '', paragraphes: []})
    const [isEditing, setIsEditing] = useState(false)

    const authCtx = useContext(AuthContext)
    /**
     * Permet de charger les notions
     */
    async function getNotions() {
        const response = await axios.get('https://etpchu-default-rtdb.firebaseio.com/competences.json')
        const fetchedNotions = []
        for (let a in response.data) {
            fetchedNotions.push({ ...response.data[a], id: a })
        }
        setNotions(fetchedNotions)
    }

    useEffect(() => {
        getNotions()
    },[])

    async function deleteNotion(id) {
        await axios.delete(`https://etpchu-default-rtdb.firebaseio.com/competences/${id}.json?auth=${authCtx.token}`)
        setIsEditing(false)
        getNotions()
    }

    async function onUpdate(){
        await axios.put(`https://etpchu-default-rtdb.firebaseio.com/competences/${notionToEdit.id}.json?auth=${authCtx.token}`, notionToEdit)
        setIsEditing(false)
        getNotions()
      }

    return (
        <Container className='d-flex-column  align-items-center'>
            <Row>
                <Col>
                    {notions.map((notion) =>
                    <div key={notion.id}>
                        <NotionCard
                            onDelete={deleteNotion}
                            setNotionToEdit={setNotionToEdit}
                            setIsEditing={setIsEditing}
                            notion={notion}
                        />
                    </div>
                    )}
                </Col>
                <Col>
                {isEditing &&
                    <FormEditNotion
                        notionToEdit={notionToEdit}
                        setNotionToEdit={setNotionToEdit}
                        onUpdate={onUpdate}
                    /> 
                }
                </Col>
            </Row>
            
        </Container>
    )
}

export default EditNotionScreen