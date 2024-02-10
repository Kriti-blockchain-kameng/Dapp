import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import profile from '..//..//public/profile.svg'
const Navbar = () => {
  return (<>    <nav className='w-screen items-start py-[4vh] pl-[4vw] bg-sky-200 flex justify-between rounded-xl'>
    <Link href="/">BitHealth </Link>
    <Link href="/profile">
    <Image src={profile}  alt="img" className='rounded-full pr-[3vw] ' width= {100} height={100} />
    {/* <img src="../../public/profile.svg" alt="img" className='rounded-full pr-4 '/>  */}
    </Link>
    </nav>
    </>

  )
}

export default Navbar