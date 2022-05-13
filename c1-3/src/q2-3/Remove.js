// l1: useState -> previos state acess by callbackfunction --> on the instance we cvan chage it  //** no need map sai find & setData  , the save in current state
//l2 push pop return items
import React, { useState } from 'react'
import { data } from './data'
const Remove = () => {
  const [list, setList] = useState(data);
  const [deletedItems, setDeletedItems] = useState([])

  const removeItem = id => {
  
    setDeletedItems(prev => [...prev, list.find(item => item.id === id)])
    setList(prev => prev.filter(item => item.id !== id))
  }
  const addItem = data => {
    const p = deletedItems.pop()

    setList(prev => [...prev, p])
  }
  return (
    <div>
      <h1>Remove item</h1>
      {deletedItems.length >=1 &&<button onClick={addItem}>deletedItems</button>}
      {list.map(({ item, id }) => (
        <div key={id}>
          <h6>{item}</h6>
          <button
            onClick={() => {
              removeItem(id)
            }}
          >
            remove
          </button>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Remove
