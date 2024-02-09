import React from 'react'
import Menu from "..//..//components/menu"

import BookAppointment from '../../components/BookAppointment'
const home = () => {
  return (
    <div className='flex'>
        <Menu/>
      <BookAppointment/>
    </div>
  )
}

export default home