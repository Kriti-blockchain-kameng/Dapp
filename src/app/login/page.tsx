import './style.css'
import React from 'react'
function App() {

  return (
    <div>
       <div className="bitHealth">BitHealth</div>
      <div className="login-container">
        <div className="login">
          <div className='sbi'></div>
          <div className='login-box'>
            <div className='login-name'>Login</div>
            <div className='login-wallet'>
              <div className='wallet'></div>
              <div className='manage'>Login with Wallet Manager</div>
              <div className='go'></div>
            </div>
            <div className='login-account'>Don&apos;t have an Account?</div>
            <div className='login-sign'>
              <div className='manage'>Sign Up</div>
              <div className='go'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App