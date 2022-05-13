import React, { useEffect, useState } from 'react'
// brands data structure
const brands1 = [
  { id: '0a', brandName: 'puma' },
  { id: '0b', brandName: 'adiddas' },
  { id: '0c', brandName: 'wildcraft' },
  { id: '0d', brandName: 'levis' },
  { id: '0e', brandName: 'celio' }
]

const QuestionOne = () => {
  const [input, setInput] = useState('')
  const [brandItem] = useState(brands1)
  const [filterItem, setFilterItem] = useState(brands1)

  useEffect(() => {
    const filter = brandItem.filter(item => item.brandName.includes(input))
    setFilterItem(filter)
  }, [input])

  return (
    <>
      <input type='text' onChange={e => setInput(e.target.value)} />

      <ul>
        {filterItem.map(item => {
          return (
            <div>
              <h6>{item.brandName}</h6>
            </div>
          )
        })}
      </ul>
    </>
  )
}

export default QuestionOne
