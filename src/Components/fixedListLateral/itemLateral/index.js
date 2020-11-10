import React from 'react'

import '../itemLateralStyles.css'

import { FaFacebook } from 'react-icons/fa'
import * as ai from 'react-icons/ai'

var colorIconSocil = {
  color: 'white',
}

export const ItemLateral = (props) => {
  return (
    <div className='container-item-lateral'>
      <div className='socialmedia-icon-flex'>
        <FaFacebook style={colorIconSocil} size='10px' />
        <ai.AiOutlineWhatsApp style={colorIconSocil} size='10px' />
      </div>
      <p className='p-name-list-lateral'>{props.localized_name}</p>
    </div>
  )
}