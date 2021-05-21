import React,{useState,useEffect} from "react";
import app from '../base'
import {useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function ViewJob({match,setDetails}) {
    const history=useHistory()
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
   const[info,setInfo]=useState([])
    useEffect(()=>{
          app.firestore().collection("Employer").get().then((response)=>{response.forEach(element=>{
            var data=element.data();
        setInfo(arr=>[...arr,data])})
    }).catch(error=>console.log(error))
    },[])
    console.log(match.path)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const apply=(title,type)=>{
       setDetails({title:title,
    type:type})
            history.push('/applyJob')

  }
  const applicant=(title)=>{
    //    app.firestore().collection("Employer").doc(title).collection("Employee").get().then((response)=>{response.forEach(element=>{
    //         var data=element.data();
    //     console.log(data)
    // })}).catch(error=>console.log(error))
     setDetails({title:title})
    history.push('/viewApplicants')
    
}

  

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Job Title</TableCell>
            <TableCell align="right">Job Type</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Job Description</TableCell>
            <TableCell align="right">Skills Required</TableCell>
             <TableCell align="right">Salary per Month</TableCell>
              <TableCell align="right">Canditates</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {info.map((data) => (
            <TableRow key={data.title}>
              <TableCell component="th" scope="row">
                {data.title}
              </TableCell>
              <TableCell align="right">{data.type}</TableCell>
              <TableCell align="right">{data.city}</TableCell>
              <TableCell align="right">{data.description}</TableCell>
              <TableCell align="right">{data.skills}</TableCell>
               <TableCell align="right">{data.ctc}</TableCell>
                <TableCell align="right">
                    { match.path==="/employerViewJob" ? <Button variant="contained" color="primary" onClick={()=>applicant(data.title)}>Applicants </Button> : 
                     <Button variant="contained" color="primary" onClick={()=>apply(data.title,data.type)}>Apply </Button>
                }
 
</TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={info.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}


