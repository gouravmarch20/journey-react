import React, { useState } from 'react'

const Way2 = () => {
  const countries = [
    { name: 'india', value: 'in', cities: ['delhi', 'mumbai'] },
    { name: 'paki', value: 'pk', cities: ['lahore', 'krachi'] },
    { name: 'uk', value: 'uk', cities: ['cali', 'wash'] }
  ]
  const [country, setCountry] = useState({
    name: '',
    value: '',
    cities: []
  })
  return (
    <div>
      <select
        value={country}
        onChange={e => {
          setCountry(e.target.value)
        }}
      >
        {countries.map((item, i) => {
          return (
            <option value={i} key={i}>
              {item.name}
            </option>
          )
        })}
      </select>
      {/*  */}
      <select value={country}>
        {countries[country]?.cities.map((item, i) => {
          return (
            <option value={i} key={i}>
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Way2
