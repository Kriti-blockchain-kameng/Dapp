import React from 'react'
import Menu from "..//..//components/menu"
import Mybookings from '../../components/Mybookings'
const home = () => {
  return (
    <div className='flex'>
        <Menu/>
      <Mybookings/>
    </div>
  )
}

export default home