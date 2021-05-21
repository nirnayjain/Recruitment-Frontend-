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
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
}); 

export default function AppliedJob({details,email}) {
    const history=useHistory()
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
   const[info,setInfo]=useState([])
  
   useEffect(()=>{
           app.firestore().collection("Employees").doc(email).collection("Applied For Job").get().then((response)=>{response.forEach(element=>{
            var data=element.data();
        setInfo(arr=>[...arr,data])})
    }).catch(error=>console.log(error))
    },[])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
 


  return (
    <Paper className={classes.root}>
     
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Type</TableCell>
          
            </TableRow>
          </TableHead>
          <TableBody>
            {info.map((data) => (
            <TableRow key={data.name}>
              <TableCell component="th" scope="row">
                {data.name}
              </TableCell>
              <TableCell align="right">{data.title}</TableCell>
              <TableCell align="right">{data.type}</TableCell>
            
            
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