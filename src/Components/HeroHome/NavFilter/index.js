import React from 'react'

import './stylesNavFilter.css'

import { BsSearch } from 'react-icons/bs'

var styleIconSearch = {
  color: '#2B2D43',
}

export const NavFilter = (props)=> {
  return (
    <div className='flex-nav'>
      <div className='search-container'>
        <div className='flex-input-search'>
          <BsSearch style={styleIconSearch} />
          <input
          className='styles-none'
          placeholder='Search' />
        </div>
      </div>
      <div className='flex-input-date'>
        <select className='styles-none'>
          <option value='Jue, 5 Nov'>Jue, 5 Nov</option>
          <option value='Vie, 6 Nov'>Vie, 6 Nov</option>
          <option value='Sab, 7 Nov'>Sab, 7 Nov</option>
          <option value='Dom, 8 Nov'>Dom, 8 Nov</option>
          <option value='Lun, 9 Nov'>Lun, 9 Nov</option>
          <option value='Mar, 10 Nov'>Mar, 10 Nov</option>
        </select>
      </div>
    </div>
  )
}