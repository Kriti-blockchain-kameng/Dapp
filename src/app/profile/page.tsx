import image from './helo.jpeg.jpg'
import ca from './ca.png'
import contact from './contact.jpg'
import vector from './bills.jpg'
import treat from './treat.png'
import doctor from './doctor.png'
import time from './time.png'
import din from './din.png'
import Image from 'next/image'

import './App.css'
import Link from 'next/link'
function App() {
  const today = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  return (
    <div className="App">
      <div className="header">
      <div className="container">
        <span className="text">{formattedDate} <br />
        <span className='hello'>Welcome, Mihir</span></span> </div>
        <div className="image-container">
        <Image src={image} alt="" className='user' />
          {/* <img src="./helo.jpeg.jpg" alt="" className='user'/> */}
        
        
      </div>
    </div> 
     
     <div className="container2">
      <div className="portion1">
        <Link href='mybookings'> <div className="box1">
          <div className='ca'>
            <Image src={ca} alt="" className='book'/>
            
          <p className='my'>My Bookings</p></div>
         
         
        </div>
        </Link>
        <div className="box2">
        <div className='ca'>
            <Image src={contact} alt="" className='book' />
       
          <p className='my' >My Reports</p></div>


        </div>
        <div className="box3">
           <div className='vector'>
            <Image src={vector} alt="" className='book' />
            </div> 
           <div className="bill"><p className='fit'>Bills & Prescriptions</p></div>
          
          
          </div>
        <div className="box4">
        <div className='vector'>
            <Image src={treat} alt="" className='book' />
            </div>
         <div className='bill'><p className='fit'>Book an Appointment</p></div> 

        </div>
      </div>
      <div className="portion2">
        <div className="box5">
         <div><p className='today'>You have an appointment today!</p></div> 
         <div className='x1'> 
         <Image src={doctor} alt='' className='doctor' />
           
            <span className='dr'>Dr. Madhuprakash Varma</span>
          </div>
          <div className='x2'>
            <Image src={time} alt='' className='time' />
          
            <span className='samay'>5:30-6:00 PM</span>
          </div>
          <div className="x3">
            <Image src={din} alt='' className='din' />
          
            <span className='samay'>10/02/24</span>
          </div>
        </div>
      </div>
     </div>
    
    </div>
  );
}

export default App;