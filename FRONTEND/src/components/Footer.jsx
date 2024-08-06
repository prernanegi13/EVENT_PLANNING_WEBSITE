import React from 'react'

const Footer = () => {
  return (
    <footer>

      <div className="banner">

        <div className='title'> 
          <h1>KING's</h1>
          <p>Events and weddings</p>
        </div>

        <div className='tag'>
          <label>News Letter</label>
          <div>
            <input type='text' placeholder='E-mail'/>
            <button>Subscribe</button>
          </div>
        </div>

        <p>Sign up with your email address to receive news and updates!</p>

      </div>
        
    </footer>
  )
}

export default Footer