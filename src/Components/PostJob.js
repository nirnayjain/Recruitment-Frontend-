import React,{useState} from "react";
import {useHistory,Link} from 'react-router-dom'
import app from '../base'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import WorkIcon from '@material-ui/icons/Work';


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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function PostJob() {
     const  history =useHistory()
    const[data,setData]=useState({
    title:"",
    type:"",
    city:"",
    description:"",
    openings:"",
    skills:"",
    ctc:""
  })
  const[titleError,setTitleError]=useState("")
    const[typeError,setTypeError]=useState("")
      const[cityError,setCityError]=useState("")
    const[descriptionError,setDescriptionError]=useState("")  
    const[openingsError,setOpeningsError]=useState("")
      const[skillsError,setSkillsError]=useState("")
    const[ctcError,setCtcError]=useState("")
    const[error,setError]=useState(false)
    const validate=()=>{
    let valid =true;
     if(data.title===''||data.title===null)
   {
    setTitleError("Required")
     valid=false;
   }
   if(data.type===''||data.type===null)
   {
    setTypeError("Required")
     valid=false;
   }
    if(data.city===''||data.city===null)
   {
    setCityError("Required")
     valid=false;
   } if(data.description===''||data.description===null)
   {
    setDescriptionError("Required")
     valid=false;
   } if(data.openings===''||data.openings===null)
   {
    setOpeningsError("Required")
     valid=false;
   } if(data.skills==''||data.skills===null)
   {
    setSkillsError("Required")
     valid=false;
   } if(data.ctc===''||data.ctc===null)
   {
    setCtcError("Required")
     valid=false;
   }
  return valid
}
  const submit= async(e)=>{
    e.preventDefault()
    if(validate())
    {
      
     
 try {
        await 
          app.firestore()
         .collection("Employer").doc(data.title).set({
             title:data.title,
              type:data.type,
    city:data.city,
    description:data.description,
    openings:data.openings,
    skills:data.skills,
    ctc:data.ctc
    
},{ merge: true }
   
         );
        history.push("/employerViewJob");
         setData({
    title:"",
    type:"",
    city:"",
    description:"",
    openings:"",
    skills:"",
    ctc:""
    })
      }
       catch (error) {
        console.log(error)
       setError(true)
        
      }
      
    }
  
     }
  const handle=(e)=>{
     if(e.target.id==='title')
     setTitleError("") 
     if(e.target.id==='type')
     setTypeError("") 
     if(e.target.id==='city')
     setCityError("") 
     if(e.target.id==='description')
     setDescriptionError("") 
     if(e.target.id==='openings')
     setOpeningsError("") 
     if(e.target.id==='skills')
     setSkillsError("") 
     if(e.target.id==='ctc')
     setCtcError("") 
   setError(false)
    const newData={...data}
    newData[e.target.name]=e.target.value
    setData(newData)
    
  }
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <WorkIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Post Job
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
               
                name="title"
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Job Title"
                 onChange={(e)=>handle(e)} 
             error={titleError||error ? true:false}
            helperText={titleError}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="type"
                label="Job Type"
                name="type"
                 onChange={(e)=>handle(e)} 
             error={typeError||error ? true:false}
            helperText={typeError}
               
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="city"
                label="City"
                name="city"
                 onChange={(e)=>handle(e)} 
             error={cityError||error ? true:false}
            helperText={cityError}
        
              />
            </Grid>

            
            <Grid item xs={12}>
               <TextField
                variant="outlined"
                required
                fullWidth
                name="description"
                label="Job Description"
                id="description"
                onChange={(e)=>handle(e)} 
             error={descriptionError||error ? true:false}
            helperText={descriptionError}
              />
              
            </Grid>
             <Grid item xs={12}>
               <TextField
                variant="outlined"
                required
                fullWidth
                name="openings"
                label="Number Of Openings"
                id="openings"
                onChange={(e)=>handle(e)} 
             error={openingsError||error ? true:false}
            helperText={openingsError}
              />
              
            </Grid>
               <Grid item xs={12}>
               <TextField
                variant="outlined"
                required
                fullWidth
                name="skills"
                label="Skills Required"
                 id="skills"
                  onChange={(e)=>handle(e)} 
             error={skillsError||error ? true:false}
            helperText={skillsError}
               
              />
              
            </Grid>
             <Grid item xs={12}>
               <TextField
                variant="outlined"
                required
                fullWidth
                name="ctc"
                label="CTC"
                id="ctc"
                 onChange={(e)=>handle(e)} 
             error={ctcError||error ? true:false}
            helperText={ctcError}
              />
              
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={(e)=>submit(e)}
            className={classes.submit}
          >
            Post
          </Button>
         
        </form>
      </div>
     
    </Container>
  );
}