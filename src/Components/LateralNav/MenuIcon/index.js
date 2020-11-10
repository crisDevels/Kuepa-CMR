import React, { Fragment } from 'react'

import { RiHomeLine } from 'react-icons/ri'
import { BsCardChecklist } from 'react-icons/bs'
import { BsCollection } from 'react-icons/bs'

import './stylesMenuIcon.css'


export const MenuIcon = ()=> {
 return (
  <Fragment>
    <button className='button-menu-icon'>
      <RiHomeLine size='20px' />
    </button>
    <button className='button-menu-icon'>
      <BsCardChecklist size='20px' />
    </button>
    <button className='button-menu-icon'>
      <BsCollection size='20px' />
    </button>
  </Fragment>
 )
}