import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user,setUser] = useState(null)
  const [loggedInUser,setLoggedInUser] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUser(userData.data)
      console.log(userData)
    }
    // console.log(userData)
  },[])
  

  const handleLogin = (email,password)=>{
    if(email == 'admin@me.com' && password==123){
      console.log('this is admin')
      setUser('admin')
      setLoggedInUser(null)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }

    else if(userData ){
      const employee = userData.find((e)=> email == e.email && password == e.password) 
      if(employee){
        console.log('this is user')
        setUser('employee')
        setLoggedInUser(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:"employee",data:employee}))
      }
      

    }
    else{
      alert("Invalid credentials")
    }
  }

 
  

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/>  : ' '}
    {user == 'admin' ? <AdminDashboard/> : (user == 'employee' ? <EmployeeDashboard data={loggedInUser}/> : null)}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App
