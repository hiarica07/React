import React from 'react'

//!2. Yol daha az tercih edilen, action sayfasını buraya aldık

export const arttir=()=>({type:"ARTTIR", payload1:"ARTTIRILDI"})
export const sifirla=()=>({type:"RESETLE", payload1:"SIFIRLANDI"})
export const azalt=()=>({type:"AZALT", payload1:"AZALTILDI"})

// const counterReducer = (state={sayac:0,text1:""},action) => {
const counterReducer = (state={sayac:0,text1:""},{type,payload1}) => {
  
   switch(type){
    case "ARTTIR":
    return{sayac:state.sayac+1,text1:payload1}

    case "AZALT":
    return{sayac:state.sayac-1,text1:payload1}

    case "RESETLE":
    return{sayac:0,text1:payload1}


    
    default:
    return state
   }
  
}

export default counterReducer