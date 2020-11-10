import React from 'react'

import './stylesUserData.css'

export const UserData = (props)=> {
  return (
    <div>
      <h2 className='title-user'>Hola, {props.name}</h2>
      <div className='flex-info'>
        <div className='container-individual-info'>
          <div>
            <div className='wrapper-circle-percentual'>
              <div className='circle-border'></div>
              <div className='circle-border-inset'>
                <p className='percentual-p'>{props.leads/props.totalLead*100}%</p>
              </div>
            </div>
          </div>
          <div className='flex-info-data'>
            <div className='flex-item-percentual'>
              <p className='subtitle-p'>Leads Obtenidos</p>
              <p className='subtitle-number'>{props.leads}/{props.totalLead}</p>
            </div>
            <div className='flex-item-percentual'>
              <p className='subtitle-p'>Cola de llamadas</p>
              <p className='subtitle-number'>{props.calls}/{props.totalCalls}</p>
            </div>
            <div className='flex-item-percentual'>
              <p className='subtitle-p'>Matriculas Finalizadas</p>
              <p className='subtitle-number'>{props.registrations}/{props.totalRegistrations}</p>
            </div>
          </div>
        </div>
        <div className='container-grupal-info'>
          <div className='block-int-grupal-goals'>
            <h3 className='title-goals-grupal'>Meta grupal</h3>
            <div>
              <div className='flex-title-grupal'>
                <p className='subtitle-p'>Leads Obtenidos</p>
                <p className='subtitle-number'>{props.leadsGroup}/{props.totalLeadsGroup}</p>
              </div>
              <div className='percentual-line'>
                <div className='line-back'></div>
                <div className='line-gradient'></div>
              </div>
            </div>
            <div>
              <div className='flex-title-grupal'>
                <p className='subtitle-p'>Matriculas Finalizadas</p>
                <p className='subtitle-number'>{props.registrationsGroup}/{props.totalRegistrationsGroup}</p>
              </div>
              <div className='percentual-line'>
                <div className='line-back'></div>
                <div className='line-gradient'></div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}