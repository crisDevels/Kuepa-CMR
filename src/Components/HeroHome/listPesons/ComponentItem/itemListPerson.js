import React from 'react'

import { IoIosCall } from 'react-icons/io'
import { AiOutlineMessage } from 'react-icons/ai'

import '../ListPersonsStyles.css'

var styleIconContact = {
  color: '#2B2D43'
}

export const ListItemPerson = (props) => (
  <div className='flex-person'>
    <p className='p-action'>{props.localized_name}</p>
    <p className='p-action'>Llamar</p>
    <div className='icons-list-action'>
      <IoIosCall onClick={props.realizeCall} style={styleIconContact} size='20px' />
      <AiOutlineMessage onClick={props.realizeMessage} style={styleIconContact} size='20px' />
    </div>
  </div>
)