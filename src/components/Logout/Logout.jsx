import React from 'react'
import { logout } from '../../firebase/firebaseConfig'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate=useNavigate()
  return (
    <>
    <button className='logout' 
    onClick={()=>{
    logout()
    navigate("/")
    }}>LOGOUT</button>
    </>
  )
}

export default Logout
