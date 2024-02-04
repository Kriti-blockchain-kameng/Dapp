import React from 'react'
import Image from 'next/image'
import MyBookings from '../../public/MyBookings.svg'
import Bills from '../../public/Bills.svg'
import Reports from '../../public/Reports.svg'
import BookAppointment from '../../public/BookAppointment.svg'
import Link from 'next/link'
// import myreports from '..//..//app/myreports/page'
const Menu = () => {

  

  return (
    <div className='content w-1/3 my-[3vh] px-[2vw] border-r-2 border-x-zinc-200 ' >
      <div className=' Menu  font-semibold  my-[4vh]  ' > 
      Menu
      </div>
   
      <Link href="mybookings">
        <div className='shadow-md my-[1vh] rounded-xl py-[3vh] flex items-center justify-start'>
          <Image className='px-[2vh]' src={MyBookings} alt='profileLogo' width={45 } height={45}  />
          <h4 >My Bookings</h4>
        </div>
     </Link>
     <Link href="myreports">
      <div className='shadow-md my-[1vh] rounded-xl py-[3vh] flex items-center justify-start'>
      <Image className='px-[2vh]' src={Reports} alt='profileLogo' width={45 } height={45}  />
    <h4 >My Reports</h4>
      </div>
     </Link>
     <Link href="bills"> 
        <div className='shadow-md my-[1vh] rounded-xl py-[3vh] flex items-center justify-start'>
          <Image className='px-[2vh]' src={Bills} alt='profileLogo' width={45 } height={45}  />
          <h4 >Bills and Prescriptions</h4>
        </div>
      </Link>
      <Link href="appointments"> 
        <div className='shadow-md my-[1vh] rounded-xl py-[3vh] flex items-center justify-start'>
          <Image className='px-[2vh]' src={BookAppointment} alt='profileLogo' width={45 } height={45}  />
          <h4 >Book an Appointment</h4>
        </div>
      </Link>
     
    </div>
  )
}

export default Menu