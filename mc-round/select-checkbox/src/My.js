import React, { useState } from 'react'

const My = () => {
  const data = [
    { name: 'india', value: 'in', cities: ['delhi', 'mumbai'] },
    { name: 'paki', value: 'pk', cities: ['lahore', 'krachi'] },
    { name: 'uk', value: 'uk', cities: ['cali', 'wash'] }
  ]
  const [selectedCountry, setSelectedCountry] = useState('in')
  const [cityOptions, setCityOptions] = useState(['delhi', 'mumbai'])
  const [selectedCity, setSelectedCity] = useState('')
  return (
    <div>
      <select
        onChange={e => {
          setSelectedCountry(e.target.value)
          let city = []
          data?.map(c => (c.value === e.target.value ? (city = c.cities) : ''))
          setCityOptions(city)
          setSelectedCity('')
        }}
        value={selectedCountry}
      >
        {data?.map(country => (
          <option value={country.value} key={country.value}>
            {country.value}
          </option>
        ))}
      </select>
      {/*  */}
      <select
        onChange={e => {
          setSelectedCity(e.target.value)
        }}
        value={selectedCity}
      >
        {cityOptions?.map(country => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  )
}

export default My
