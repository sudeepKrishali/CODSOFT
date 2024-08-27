import React from 'react'

function ContactMe() {
  return (
    <>
    <div className='contact-top'></div>
    <div className='contact' >
      <div className='contact-container'>
        <div className="contact-para">
          <h1>Want to colaborate...</h1>
          <p>plz fill the form to start a conversation</p>
        </div>
        <div className="form-container">
        <form className='contact-form'>
              <input type="text" name='name' placeholder='your name' />
               <input type="email" name='email' placeholder='your email'/>
               <input type="text" name='message' placeholder='type your message here' />
               <button type='submit'>Submit</button>
        </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactMe
