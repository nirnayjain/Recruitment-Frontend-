import React from 'react'
import {AppBar,IconButton,Typography,Button,Toolbar} from '@material-ui/core'
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <AppBar position="static">
  <Toolbar >
    {/* <IconButton edge="start" color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton> */}
    <Typography variant="h6" style={{flex:"1"}} href="/">
      Recruitment
    </Typography>
    <Button color="inherit" component={Link} to='/employerLogin'>Employer</Button>
    <Button color="inherit" component={Link} to='/employeeLogin'>Employee</Button>
  </Toolbar>
</AppBar>
    )
}
