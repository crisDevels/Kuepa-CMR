import React from 'react'

import './stylesPlan.css'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { IoIosCall } from 'react-icons/io'
import { AiOutlineMessage } from 'react-icons/ai'

var styleIconContact = {
  color: '#2B2D43',
  margin: '0 10px 0 0'
}

export const PlanComponent = (props)=> {
  return (
    <div className='block-container-plan'>
      <div className='flex-title-plan'>
        <h5 className='title-plan'>Tu plan de hoy</h5>
        <button className='button-plan'>
          ir a la gestión de llamados
          <MdKeyboardArrowRight />
        </button>
      </div>
      <div className='flex-works-plans'>
        <div className='contianer-item-plan'>
          <div className='container-gradient-blue'>
            <p className='number-total-works'>
              {props.calls + props.messages}
            </p>
          </div>
          <div>
            <p className='p-subtitle-plan'>leads de primer contacto</p>
            <div className='flex-icon-plans'>
              <IoIosCall style={styleIconContact} size='20px' />
              <p className='p-subtitle-plan'>{props.calls}</p>
            </div>
            <div className='flex-icon-plans'>
              <AiOutlineMessage style={styleIconContact} size='20px' />
              <p className='p-subtitle-plan'>{props.messages}</p>
            </div>
          </div>
        </div>
        <div className='contianer-item-plan'>
          <div className='container-gradient-purple'>
            <p className='number-total-works'>
              {props.calls + props.messages}
            </p>
          </div>
          <div>
            <p className='p-subtitle-plan'>leads por confirmar</p>
            <div className='flex-icon-plans'>
              <IoIosCall style={styleIconContact} size='20px' />
              <p className='p-subtitle-plan'>{props.calls}</p>
            </div>
            <div className='flex-icon-plans'>
              <AiOutlineMessage style={styleIconContact} size='20px' />
              <p className='p-subtitle-plan'>{props.messages}</p>
            </div>
          </div>
        </div>
        <div className='contianer-item-plan'>
          <div className='container-gradient-pink'>
            <p className='number-total-works'>
              {props.calls + props.messages}
            </p>
          </div>
          <div>
            <p className='p-subtitle-plan'>leads de último intentos</p>
            <div className='flex-icon-plans'>
              <IoIosCall style={styleIconContact} size='20px' />
              <p className='p-subtitle-plan'>{props.calls}</p>
            </div>
            <div className='flex-icon-plans'>
              <AiOutlineMessage style={styleIconContact} size='20px' />
              <p className='p-subtitle-plan'>{props.messages}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}