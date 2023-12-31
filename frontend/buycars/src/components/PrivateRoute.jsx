import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const state = useSelector((state)=>state.auth)
  if(!state.isAuth){
    return <Navigate to='/login'/>
  }
  return children
}

export default PrivateRoute