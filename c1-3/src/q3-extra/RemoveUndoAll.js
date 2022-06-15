import React, { useState } from 'react'
import { languageData } from './data'
const RemoveUndoAll = () => {
  const [codingLanguage, setCodingLanguage] = useState(languageData)
  const [undoData, setUndoData] = useState([])


  const removeLanguage = id => {


    setCodingLanguage(prev => prev.filter(language => language.id !== id))
    
    //-way1 :: ADD
    // const newLanguage = undoData
    // newLanguage.push(removeLanguage)
    // setUndoData(newLanguage)


    // -way2 :: ADD
    const removeLanguage = codingLanguage.find(language => language.id === id)
    setUndoData(prev => [...prev, removeLanguage])

    
  }

  const undoLanguage = () => {
    if (undoData.length >= 1) {
      const tempLangauage = undoData.shift()
      setCodingLanguage(prev => [...prev, tempLangauage])
    }
  }
  return (
    <div>
      {//   codingLanguage.length >= 1 &&
      codingLanguage.map(language => {
        const { id, item } = language
        return (
          <div key={id}>
            <h2>{item}</h2>
            <button onClick={() => removeLanguage(id)}>delete</button>
            <hr />
          </div>
        )
      })}
      <button onClick={undoLanguage}>Undo</button>
    </div>
  )
}

export default RemoveUndoAll
