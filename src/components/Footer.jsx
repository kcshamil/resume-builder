import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div style={{height:'300px',backgroundColor:'purple',color:'white'}} className='d-flex justify-content-center align-items-center p-5 flex-column'>
      <h3>Contact Us</h3>
      <h5 className='fw-bolder'><IoIosMail /> resumebuilder@gmail.com</h5>
      <h5 className='fw-bolder'>9207388631</h5>
      <h4>Connect With Us</h4>
      <div className='d-flex justify-content-center fs-4 my-1 '>
        <FaWhatsapp  className='me-3'/>
        <FaInstagram className='me-3'/>
        <FaFacebook />
      </div>
      <p>Designed & Build with ❤️ using react </p>
    </div>
  )
}

export default Footer