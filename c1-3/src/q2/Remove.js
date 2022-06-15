import React, { useState } from 'react'
import { languageData } from './data'
const Remove = () => {
  const [codingLanguage, setCodingLanguage] = useState(languageData)
  const removeLanguage = id => {
    // w1::
    // const tempLanguageData = codingLanguage.filter(languge => languge.id !== id)

    // setCodingLanguage(tempLanguageData)

    //w2::
    setCodingLanguage(prev => prev.filter(language => language.id !== id))
  }
  return (
    <div>
      {
      //   codingLanguage.length >= 1 &&
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
    </div>
  )
}

export default Remove
