import React from 'react'

import Paragraphe from './Paragraphe'

const DisplayNotion = ({notion}) => {

    function renderParagraphe(paragraphe){
        return (
            <Paragraphe key={Math.random()} paragraphe={paragraphe}/>
        ) 
    }

    return (
        <div>
            <h2 className='text-center m-2 text-primary text-uppercase'>Nouvelle notion : {notion.title}</h2>
            {notion.paragraphes.map((paragraphe)=>
                renderParagraphe(paragraphe)
            )}
        </div>
    )
}

export default DisplayNotion