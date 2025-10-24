import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'; 
import { Tooltip } from '@mui/material';

function Header() {
  
  const projectInfo = "A Resume Builder App is a web or mobile application that helps users create professional resumes easily without needing to manually format or design them.Users simply fill in their personal, educational, and professional details, and the app automatically generates a formatted resume that can be downloaded, shared, or printed."

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'purple'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img style={{width:'30px'}} src="https://img.freepik.com/premium-vector/vector-design-resume-icon-style_1134108-50006.jpg?semt=ais_hybrid&w=740&q=80" alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-light text-decoration-none'>rBuilder</Link>
          </Typography>
          <Tooltip title={projectInfo}>
          <Button color="inherit">Login</Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header