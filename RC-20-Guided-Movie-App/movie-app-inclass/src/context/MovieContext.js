import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'


export const MovieContextKai = createContext()

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;


const MovieContext = ({children}) => {

const [movies,setMovies] = useState([])
const [loading,setLoading] = useState(false)

useEffect(()=>{
  getMovies(BASE_URL)
},[])

const getMovies=(API_ADDRESS)=>{
  setLoading(true)
  axios.get(API_ADDRESS).then((res)=>setMovies(res.data.results)).catch((err)=>console.log(err)).finally(()=>setLoading(false))
  
}

  return (
    <MovieContextKai.Provider value={{movies,loading,getMovies}}>
        {children}
    </MovieContextKai.Provider>
  )
}

export default MovieContext