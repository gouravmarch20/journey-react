import React, { useState } from 'react'
import { languageData } from './data'
const RemoveUndo = () => {
  const [codingLanguageList, setCodingLanguageList] = useState(languageData)
  const [undoData, setUndoData] = useState([])

  const removeLanguageList = id => {
    const removelanguage = codingLanguageList.find(
      language => language.id === id
    )
    setUndoData([removelanguage])
    setCodingLanguageList(prev => prev.filter(p => p.id !== id))
  }
  const undoLanguage = () => {
    const addLanguage = undoData.pop()

    setCodingLanguageList(prev => [...prev, addLanguage])
  }
  console.log(undoData)
  return (
    <div>
      {codingLanguageList.map(language => {
        const { id, item } = language
        return (
          <div key={id}>
            <h3>{item}</h3>
            <button onClick={() => removeLanguageList(id)}>remove </button>
          </div>
        )
      })}
      {undoData && undoData.length >= 1 && (
        <button onClick={undoLanguage}>Undo</button>
      )}
    </div>
  )
}

export default RemoveUndo
