import React from 'react'
import Menu from "../../components/menu"
import Doctors from '../../components/Doctors'
const home = () => {
  return (
    <div className='flex'>
        <Menu/>
      <Doctors/>
    </div>
  )
}

export default home