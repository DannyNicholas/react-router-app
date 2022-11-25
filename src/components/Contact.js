import React from "react";
import Modal from './Modal'

const Contact = () => {

  return (
    <div>
      <Modal />
      <div
          className='ui raised very padded text container segment'
          style={{marginTop:'80px'}}
      >
          <h3 className='ui header'>Contact</h3>
          <p>How to contact us....</p>
      </div>
     </div>
  )
}

export default Contact;
