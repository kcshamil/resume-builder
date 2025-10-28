import { Divider, Button } from '@mui/material'
import React from 'react'

function Preview() {
  return (
    <div style={{ margin: '70px' }} className='shadow p-5 w-100 rounded text-center'>
      <h3>Name</h3>
      <h5>Job Title</h5>
      <h6><span className='mx-2'>Location</span>|<span className='mx-2'>E-mail</span>|<span className='mx-2'>Mobile</span></h6>
      <p className='my-3'>
        <a href="" target='_blank'>GITHUB</a> |
        <a href="" target='_blank'>LINKIDIN</a> |
        <a href="" target='_blank'>PORTFOLIO</a>
      </p>
      <Divider sx={{ fontSize: '25px' }}>Summary</Divider>
      <p style={{ textAlign: 'justify' }}>
        Motivated and detail-oriented computer science student with strong knowledge in Python, Django, HTML, CSS, JavaScript, and React. Passionate about building web applications and learning new technologies. Seeking opportunities to apply my skills in real-world projects and contribute to team success.
      </p>
      <Divider sx={{ fontSize: '25px', marginBottom: 'mx-2' }}>Education</Divider>
      <h5>Course Name</h5>
      <p><span className='mx-2'>College</span>|<span className='mx-2'>University</span>|<span className='mx-2'>Year of Passout</span></p>
      <Divider sx={{ fontSize: '25px', marginBottom: 'mx-2' }}>Professional Experiance</Divider>
      <h5>Job / Internship</h5>
      <p><span className='mx-2'>company name</span>|<span className='mx-2'>company location</span>|<span className='mx-2'>Duration  </span></p>
      <Divider sx={{ fontSize: '25px', marginBottom: 'mx-2' }}> Skills</Divider>
      <div className="d-flex flex-wrap justify-content-between my-3">
        <Button variant="contained" className='m-1'>NODE JS </Button>
        <Button variant="contained" className='m-1'>EXPRESS JS </Button>
        <Button variant="contained" className='m-1'>MONGODB  </Button>
      </div>

    </div>
  )
}

export default Preview