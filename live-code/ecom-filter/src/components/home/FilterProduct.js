import React, { useEffect, useState } from 'react'
import { useFilter } from '../../context/FilterContext'
import { data } from '../../backend/data'

import {
  FILTER_CLEAR_ALL,
  FILTER_BY_GENDER,
  FILTER_BY_BRAND,
  FILTER_BY_SIZE,
  PRICE_LOW_TO_HIGH,
  PRICE_HIGH_TO_LOW,
  SORT_BY_PRICE,
  FILTER_BY_PRICE
} from '../../types/FilterType'
import { getUnique } from '../../helper/index'
export const FilterProduct = () => {
  const { filterState, filterDispatch } = useFilter()
  const [uniqueBrands, setUniqueBrands] = useState([])
  const [uniqueSize, setUniqueSize] = useState([])
  const [priceMax, setPriceMax] = useState('2200')
  console.log(filterState)
  // optimise because it not required to change
  useEffect(() => {
    setUniqueBrands(getUnique(data.data, 'brand'))
    setUniqueSize(getUnique(data.data, 'size'))
  }, [])

  return (
    <div>
      <button
        onClick={() =>
          filterDispatch({
            type: FILTER_CLEAR_ALL
          })
        }
      >
        Clear filter
      </button>
      <h3>Sort By Price </h3>
      <label htmlFor='lowToHigh'>
        <input
          type='radio'
          id='lowToHigh'
          name='priceSort'
          onClick={() =>
            filterDispatch({
              type: SORT_BY_PRICE,
              payload: PRICE_LOW_TO_HIGH
            })
          }
        />
        low to hight
      </label>
      <label htmlFor='highToLow'>
        <input
          type='radio'
          name='priceSort'
          id='highToLow'
          onClick={() =>
            filterDispatch({
              type: SORT_BY_PRICE,
              payload: PRICE_HIGH_TO_LOW
            })
          }
        />
        high to low
      </label>
      <h3>Size</h3>
      {uniqueSize &&
        uniqueSize.map(size => {
          return (
            <>
              <label htmlFor={size}>
                <input
                  id={size}
                  type='checkbox'
                  checked={filterState.sizes.includes(size)}
                  onClick={() => {
                    filterDispatch({
                      type: FILTER_BY_SIZE,
                      payload: size
                    })
                  }}
                />
                {size}
              </label>
            </>
          )
        })}
      {/* brand */}
      <h3>brand </h3>
      {uniqueBrands &&
        uniqueBrands.map((brand, index) => {
          return (
            <>
              <label htmlFor={brand}>
                <input
                  id={brand}
                  type='checkbox'
                  checked={filterState.brands.includes(brand)}
                  onChange={() =>
                    filterDispatch({ type: FILTER_BY_BRAND, payload: brand })
                  }
                />
                {brand}
              </label>
            </>
          )
        })}

      {/*  */}
      <h3>Gender </h3>
      <label htmlFor='Men'>
        <input
          type='radio'
          id='Men'
          name='idealFor'
          onClick={() =>
            filterDispatch({
              type: FILTER_BY_GENDER,
              payload: 'Men'
            })
          }
        />
        Men
      </label>
      <label htmlFor='Women'>
        <input
          type='radio'
          name='idealFor'
          id='Women'
          onClick={() =>
            filterDispatch({
              type: FILTER_BY_GENDER,
              payload: 'Women'
            })
          }
        />
        Women
      </label>
      <label htmlFor='Kids'>
        <input
          type='radio'
          id='Kids'
          name='idealFor'
          onClick={() =>
            filterDispatch({
              type: FILTER_BY_GENDER,
              payload: 'Kids'
            })
          }
        />
        Kids
      </label>
      {/* price */}
      <input
        type='range'
        min='100'
        max='2200'
        value={priceMax}
        step='100'
        onChange={e => {
          setPriceMax(e.target.value)
          filterDispatch({
            type: FILTER_BY_PRICE,
            payload: e.target.value
          })
        }}
      />
      <h2>{priceMax}</h2>
    </div>
  )
}
