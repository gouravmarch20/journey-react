import './styles.css'
import { useState } from 'react'


export default function App () {
  const [data, setData] = useState(initialData)
  const [id, setId] = useState(null)
  const [price, setPrice] = useState(null)

  return (
    <div>
      <div>
        <label> Id </label>
        <select name='ids' onChange={e => setId(parseInt(e.target.value))}>
          {data.map(e => (
            <option value={e.id}>{e.item}</option>
          ))}
        </select>
      </div>
      <div>
        <label> Price </label>
        <input
          type='number'
          onChange={e => setPrice(parseInt(e.target.value))}
        />
      </div>
      <button
        onClick={() => {
          setData(data.map(e => (e.id === id ? { ...e, price } : e)))
        }}
      >
        Submit
      </button>
      <ul>
        {data.map(e => (
          <li key={e.id}>
            id: {e.id} -- {e.item} : $ {e.price}
          </li>
        ))}
      </ul>
    </div>
  )
}
