import React, { Fragment } from 'react'
import { LogoString } from './Logo'
import { MenuIcon } from './MenuIcon'
import { MenuProfile } from './MenuProfile'

import './stylesLateral.css'

class LateralNav extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='flex-nav-lateral'>
          <div className='container-block-nav-lateral'>
            <div className='flex-center-logo'>
              <div className='logo-container'>
                <LogoString />
              </div>
            </div>
            <div className='align-buttons'>
              <MenuIcon />
            </div>
            <div className='profile-buttons'>
              <div className='buttons-profile'>
                <MenuProfile />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default LateralNav;