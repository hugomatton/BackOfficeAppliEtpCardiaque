import { createContext, useReducer } from "react";

export const ParagraphesContext = createContext({
    paragraphes: [],
    addParagraphe: (paragraphe) => {},
    deleteParagraphe: (paragrapheId) => {},
    setParagraphes: (paragraphes) => {},
    updateParagraphe: (paragrapheId, paragraphe) => {},
    upParagraphe: (paragrapheId) => {},
    downParagraphe: (paragrapheId) => {},
})

function paragraphesReducer(state, action){
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload]   
        case 'UP':
            const stateAfterUp = [...state]
            //on récupère l'emplacement dans la liste du paragraphe
            const indexPara = state.indexOf(action.payload)
            //si le paragraphe n'est pas premier
            if(indexPara !== 0){
                //on copie les valeurs des cases qui vont permutter
                const para = state[indexPara]
                const beforePara = state[indexPara - 1]
                stateAfterUp[indexPara] = beforePara
                stateAfterUp[indexPara - 1] = para
            }
            return stateAfterUp
        case 'DOWN':
            const stateAfterDown = [...state]
            const indexParaToDown = state.indexOf(action.payload)
            //si paragraphe n'est pas le dernier
            if(indexParaToDown !== state.length - 1){
                const para = state[indexParaToDown]
                const afterPara = state[indexParaToDown + 1]
                stateAfterDown[indexParaToDown] = afterPara
                stateAfterDown[indexParaToDown + 1] = para
            }
            return stateAfterDown
        case 'DELETE':
            return state.filter((paragraphe)=> paragraphe.id !== action.payload)
        default:
            break;
    }
}

function ParagraphesContextProvider({children}){

    const [paragraphesState, dispatch] = useReducer(paragraphesReducer, [])

    function addParagraphe(paragrapheData) {
        dispatch({ type: 'ADD', payload: paragrapheData });
    }

    function setParagraphes(paragraphes){
        dispatch({type: 'SET', payload: paragraphes})
    }

    function deleteParagraphe(id) {
        dispatch({ type: 'DELETE', payload: id });
    }

    function updateParagraphe(id, paragrapheData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: paragrapheData } });
    }

    function upParagraphe(paragraphe){
        dispatch({ type: 'UP', payload: paragraphe });
    }

    function downParagraphe(paragraphe){
        dispatch({ type: 'DOWN', payload: paragraphe });
    }

    const value = {
        paragraphes: paragraphesState,
        setParagraphes: setParagraphes,
        addParagraphe: addParagraphe,
        deleteParagraphe: deleteParagraphe,
        updateParagraphe: updateParagraphe,
        downParagraphe: downParagraphe,
        upParagraphe: upParagraphe
    }

    return (
        <ParagraphesContext.Provider value={value}>
            {children}
        </ParagraphesContext.Provider>
    )
}

export default ParagraphesContextProvider