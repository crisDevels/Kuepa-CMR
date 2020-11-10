import React from 'react'
import FixedListLateral from './Components/fixedListLateral'
import HeroHome from './Components/HeroHome'
import LateralNav from './Components/LateralNav'

class App extends React.Component {
  state = {
    data: {
      id: '1',
      name: 'Oscar',
      lastName: 'Mayor',
      leads: 50,
      totalLead: 100,
      registrations: 10,
      totalRegistrations: 20,
      calls: 50,
      totalCalls: 100,
      leadsGroup: 200,
      totalLeadsGroup: 400,
      registrationsGroup: 50,
      totalRegistrationsGroup: 100,
      dates : [
        {
          id: 1,
          date: 'Jue, 5 Nov'
        },
        {
          id: 2,
          date: 'Vie, 6 Nov'
        },
        {
          id: 3,
          date: 'Sab, 7 Nov'
        },
        {
          id: 4,
          date: 'Dom, 8 Nov'
        },
        {
          id: 5,
          date: 'Lun, 9 Nov'
        },
        {
          id: 6,
          date: 'Mar, 10 Nov'
        }
      ]
    },
  }

  render() {
    return (
      <div className='flex-components-cmr'>
        <LateralNav {...this.state.data} />
        <HeroHome {...this.state.data} />
        <FixedListLateral />
      </div>
    )
  }
}

export default App