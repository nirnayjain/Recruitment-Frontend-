
import React,{useState} from "react";
import {useHistory,Link} from 'react-router-dom'
import app from '../base'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert'
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
})); 

 
const Login=({match})=>{
     const  history =useHistory()
    const[data,setData]=useState({
    Email:"",
    password:""
  })
  const[emailError,setEmailError]=useState("")
    const[passwordError,setPasswordError]=useState("")
    const[error,setError]=useState(false)
    const validate=()=>{
    let valid =true;
     if(data.Email===''||data.Email===null)
   {
    setEmailError("Required")
     valid=false;
   
  }
   if(data.password===''||data.password===null)
   {
    setPasswordError("Required")
     valid=false;
   
  }
  return valid
}
  const submit= async(e)=>{
    e.preventDefault()
    if(validate())
    {
 try {
        await app
          .auth()
          .signInWithEmailAndPassword(data.Email, data.password);
          if(match.path==='/employerLogin')
        history.push("/postJob");
        else
        history.push("/employeeviewJob")
         setData({
    Email:"",
    password:"" 
    })
      }
       catch (error) {
        setPasswordError(" ")
       setError(true)
        
      }
      
    }
  
     }
  const handle=(e)=>{
      if(e.target.id==='email')
  setEmailError("")
   if(e.target.id==='password')
  setPasswordError("")
   setError(false)
    const newData={...data}
    newData[e.target.name]=e.target.value
    setData(newData)
    
  }

     const classes = useStyles();
return(
 <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
           {match.path==='/employerLogin'?<> Employer</> :<> Employee</> }
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
           type="email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="Email"
            autoComplete="email"
            autoFocus
            
             onChange={(e)=>handle(e)} 
             error={emailError||error ? true:false}
            helperText={emailError}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            
            autoComplete="current-password"
             onChange={(e)=>handle(e)} 
                     
                      error={passwordError||error ? true:false}
                      helperText={passwordError}
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e)=>submit(e)}
          >
            Login
          </Button>
          <Grid container>
            <Grid item>
                {match.path==='/employerLogin'?
              <Link to="/employerSignup">
                Don't have an account? Sign Up
              </Link> :
               <Link to="/employerSignup">
                Don't have an account? Sign Up
              </Link>}
            </Grid>
            </Grid>
           <Grid>
                 {error ?<Alert  severity="error"style={{marginTop:"8px"}}>
  Invalid Credentials !
</Alert>:" "}
            
          </Grid>
        </form>
      </div>
     
     
    </Container>
  );
}
export default Login

