import { Box, Paper } from '@mui/material'
import React from 'react'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'


function History() {
  return (
    <div>
      <h1 className='text-center my-5'>Downloaded Resume History</h1>
      <Link to={'/resume'} className='float-end me-5' style={{ marginTop: '-80px' }}>Back</Link>
      <Box component="section" className='container-fluid'>
        <div className="row">
          <div className="col-md-4">
            <Paper elevation={3} sx={{my:5,p:5,textAlign:'center'}}>
            <div className='d-flex justify-content-between align-items-center'>
              <h6>Review At: date&time</h6>
              <button className='btn text-danger fs-4'><MdDelete /></button>

            </div>
            <div className='border rounded p-3'>
              <img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRddnaw324VWzAO_2OUWa-wbK8PXisO5R0Bcg&s" alt="resume" />
            </div>
            </Paper>
            

          </div>

        </div>
      </Box>
    </div>
  )
}

export default History