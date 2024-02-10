import React from 'react'
import DoctorsComponent from './DoctorsComponent'

const Doctors = () => {
  return (
    <div className='container px-[3vw] py-[3vh] '>
   <h3 className='font-semibold'>Select available doctor</h3>
   <p className='text-sm'>Allergy and Immunology</p>
  <DoctorsComponent/>
  </div>
  )
}

export default Doctors