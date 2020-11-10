import React from 'react'
import { ItemLateral } from './itemLateral'

class FixedListLateral extends React.Component {
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
      <div className='fixed-component'>
        <div className='block-scroll-lateral-list'>
          <ul className='ul-list-persons'>
            {
              this.state.dataNames.map(names => (
                <li key={names.id}><ItemLateral {...names} /></li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default FixedListLateral