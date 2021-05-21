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
import WorkIcon from '@material-ui/icons/Work';
import Input from '@material-ui/core/Input';
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

 
const ApplyJob=({details,setEmail})=>{
     const  history =useHistory()
    const[data,setData]=useState({
    name:"",
    Email:"",
    number:'',
   
  })
 
   const[nameError,setNameError]=useState("")
  const[emailError,setEmailError]=useState("")
    const[numberError,setNumberError]=useState("")
    const[error,setError]=useState(false)
    const [file , setFile] = useState('');
    const validate=()=>{
    let valid =true;
     if(data.name===''||data.name===null)
   {
    setNameError("Required")
     valid=false;
   
  }
     if(data.Email===''||data.Email===null)
   {
    setEmailError("Required")
     valid=false;
   
  }
   if(data.number===''||data.number===null)
   {
    setNumberError("Required")
     valid=false;
   
  }
  return valid
}
  const submit= async(e)=>{
    e.preventDefault()
    if(validate())
    {
        try{
        await app
          .firestore()
          .collection("Employees").doc(data.Email).collection("Applied For Job").add({
              name:data.name,
              Email:data.Email,
              number:data.number,
              title:details.title,
            type:details.type           }
          )
          setEmail(data.Email)
        }
        catch(error)
        {
            console.log(error)
       setError(true)
        }
 try {
        await app
          .firestore()
          .collection("Employer").doc(details.title).collection("Employee").add({
              name:data.name,
              Email:data.Email,
              number:data.number}
          )

          history.push("/appliedJob")
      }
       catch (error) {
        console.log(error)
       setError(true)
        
      }
      app.storage().ref().child(`gs://jobportal-d5683.appspot.com${file.name}`).put(file)
 .then((snapshot) => {
  console.log('Uploaded a blob or file!');
});
      
    }
  
     }
  const handle=(e)=>{
      if(e.target.id==='name')
  setNameError("")
      if(e.target.id==='email')
  setEmailError("")
   if(e.target.id==='number')
  setNumberError("")
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
          <WorkIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Applicants Details
        </Typography>
        <form className={classes.form} noValidate>
             <TextField
           
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            
             onChange={(e)=>handle(e)} 
             error={nameError||error ? true:false}
            helperText={nameError}
          />
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
           
            
             onChange={(e)=>handle(e)} 
             error={emailError||error ? true:false}
            helperText={emailError}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="number"
            label="Mobile Number"
           
            id="number"
            
            autoComplete="mobile Number"
             onChange={(e)=>handle(e)} 
                     
                      error={numberError||error ? true:false}
                      helperText={numberError}
          />
          
          
  
<label htmlFor="btn-upload">
          <input
            id="btn-upload"
            name="btn-upload"
            style={{ display: 'none' }}
            type="file"
             onChange={(e)=>{setFile(e.target.files[0])}}
            />
           
          <Button
            className="btn-choose"
            variant="contained"
            component="span"
            color="primary" >
             Upload Resume
          </Button>
        </label>
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e)=>submit(e)}
           
          >
            Apply
          </Button>
         
        </form>
      </div>
     
     
    </Container>
  );
}
export default ApplyJob

