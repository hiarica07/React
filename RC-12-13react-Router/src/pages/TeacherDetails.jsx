import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import NotFound from './NotFound';

const TeacherDetails = () => {


    // //!1.yol uzun yol.
    // //******************************************************************* */
    // const {id}=useParams()

    // const [person,setPerson] = useState({});
    // const [error,setError] = useState(false)

    // useEffect(()=>{
    //     axios
    //     .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    //     .then((res) => setPerson(res.data)).catch((err)=>setError(true))
    // },[id])
    // // error durumlarinda alttaki gibi js alanina yazilarak error sayfasina yonlendirme yapilabilir  
    // //******************************************************************************** */
    // if(error){
    //   return <NotFound/>
    // }


     //2.yol

     const {state:{person}}=useLocation()

  return (
    <div className='container text-center mt-4'>
    <img src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${person.name}`} alt="" />
    <h3>{person.name}</h3>
    <h2>{person.email}</h2>
    <h5>{person.website}</h5>
    <h6>{person.phone}</h6>
    </div>
  )
}

export default TeacherDetails