import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {

    const name = "halil"
    const password = "4593"

  return name==="halil" && password==="4593" ? (<Outlet/>) : (<Navigate to ="/" />)
    
  
}

export default PrivateRouter