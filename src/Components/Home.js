import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/styles'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
   marginTop:'20vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))
const Home=()=>{
      const classes = useStyles();
return(
    <Container component="main" maxWidth="xs">
      <CssBaseline />
       <div className={classes.paper}>
    <Grid container spacing={10}>
            <Grid item xs={12} sm={6}>
             <Button color="primary" component={Link}  to='/employerLogin' variant='contained' style={{ padding: " 2vh 8vh" }}>Employer</Button>
             </Grid>
            
            <Grid item xs={12} sm={6}>
            <Button color="primary" component={Link}  to='/employeeLogin'variant='contained' style={{ padding: " 2vh 8vh" }}>Employee</Button>
            </Grid>
    </Grid>
    </div>
    </Container>
)
}
export default Home
