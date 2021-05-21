import React,{useState} from 'react'
import Header from './Components/Header'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './Components/Login'
import Registration from './Components/Registration'
import PostJob from './Components/PostJob'
import ViewJob from './Components/ViewJob'
import ApplyJob from './Components/ApplyJob'
import ViewApplicants from './Components/ViewApplicants'
import AppliedJob from './Components/AppliedJob'
import Home from './Components/Home'
export default function App1() {
  const [details,setDetails]=useState({
    title:"",
    type:""

  })
  const[email,setEmail]=useState("")
  return (
    <>
    <Header />
    
       <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/employerLogin'  component={Login} />
          <Route path='/employeeLogin' component={Login} />
         <Route path='/employerSignup' component={Registration} />
         <Route path='/employeeSignup'  component={Registration} />

          <Route path='/postJob' component={PostJob}/>
           <Route path='/employerViewJob' render={(props)=><ViewJob {...props} details={details} setDetails={setDetails} />} />
            <Route path='/employeeViewJob'  render={(props)=><ViewJob {...props}details={details} setDetails={setDetails}  />} />
            <Route path='/applyJob' render={(props)=><ApplyJob {...props}details={details} setDetails={setDetails} setEmail={setEmail} email={email} />}/>
            <Route path='/viewApplicants' render={(props)=><ViewApplicants {...props} details={details} setDetails={setDetails} />}/>
             <Route path='/appliedJob' render={(props)=><AppliedJob {...props}details={details} setDetails={setDetails}  setEmail={setEmail} email={email}/>}/>
       </Switch>
    

    </>
  )
  }