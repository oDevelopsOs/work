import React from 'react'
import { Button } from 'antd'
import{ HiOutlineSun , HiOutlineMoon } from 'react-icons/hi'

function ThemeBtn({darkTheme , toggleTheme}) {
  return (
    <div className='themeBtn'>
        <Button onClick={toggleTheme}>
            {darkTheme ? <HiOutlineSun/> : <HiOutlineMoon/>}
        </Button>
    </div>
  )
}

export default ThemeBtn