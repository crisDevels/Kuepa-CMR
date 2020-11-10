import React, { Fragment } from 'react'
import { ListItemPerson } from './ComponentItem/itemListPerson'

import './ListPersonsStyles.css'

import loader from '../../../loading.gif'

class ListPersons extends React.Component {
  state = {
    isLoading: false,
    error: null,
    dataNames: []
  }

  componentDidMount () {
    this.fetchNames()
  }

  fetchNames = async () => {
    this.setState({
      isLoading: true,
      error: null
    })

    try {
      const response = await fetch('https://api.opendota.com/api/heroes')
      const data = await response.json()
  
      this.setState({
        dataNames: data,
        isLoading: false,
      })
    }catch(error) {
      this.setState({
        error: error,
        isLoading: false,
      })
    }
  }
  render() {
    return (
      <Fragment>
        <div className='container-persons-scroll'>
          <div className='block-list-name'>
            <h3 className='title-list-persons'>Conexiones de agenda para hoy</h3>
            <ul className='ul-list-persons'>
              {
                this.state.dataNames.map(names => {
                  return (
                    <li key={names.id}><ListItemPerson {...names}/></li>
                  )
                })
              }
              {
                this.state.isLoading &&
                  <img src={loader} alt='loading pages' width='50px' />
              }
            </ul>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ListPersons