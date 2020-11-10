import React, { Fragment } from 'react'

import { BsAppIndicator } from 'react-icons/bs'
import { HiOutlineUserCircle } from 'react-icons/hi'

import './stylesMenuIcon.css'

export const MenuProfile = ()=> {
 return (
  <Fragment>
    <button className='button-menu-icon'>
      <BsAppIndicator size='20px' />
    </button>
    <button className='button-menu-icon'>
      <HiOutlineUserCircle size='20px' />
    </button>
  </Fragment>
 )
}