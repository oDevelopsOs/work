import React from 'react'
import {FireFilled} from '@ant-design/icons'
import LogoMiims from '/logo-simple-V2.svg'
import BanMiims from '/bannière-V2.svg'

const Logo = ({ collaps }) => {
  return (
    <div className='logo'>
        <img 
        src={ LogoMiims }
        className='logo-icon'>
            
        </img>
    </div>
  )
}

export default Logo