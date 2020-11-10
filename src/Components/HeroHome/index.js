import React, { useState } from 'react'
import ListPersons from './listPesons'
import { NavFilter } from './NavFilter'
import { PlanComponent } from './plan'

import './stylesHero.css'
import { UserData } from './UserData'

export const HeroHome = (props) => {
  const [calls, setCalls] = useState(15)
  const [messages, setMessage] = useState(15)

  const realizeCall = ()=> {
    setCalls(calls - 1)
  }

  const realizeMessage = ()=> {
    setMessage(messages - 1)
  }

  return (
    <div className='container-hero'>
      <NavFilter {...props} />
      <UserData {...props} />
      <div className='flex-interaction-user'>
        <ListPersons {...props} calls={calls} messages={messages} realizeCall={realizeCall} realizeMessage={realizeMessage} />
        <PlanComponent calls={calls} messages={messages} />
      </div>
    </div>
  )
}

export default HeroHome