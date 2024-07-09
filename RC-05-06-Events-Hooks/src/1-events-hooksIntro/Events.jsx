import React from 'react'

const Events = () => {
    let baslik = "Merhaba"
    let count = 0

    const arttir=()=>{
      count+=1
      console.log(count);
      document.querySelector("span").textContent=count
    }
//! react alanında parametreli fonksiyon çağıracaksak, fonksiyonun adının önüne ()=> işaretini koymalıyız, yoksa fonksiyonu event ı beklemeden çalıştırıyor
    const butonTitle=(title)=>{
      console.log(title);
      document.querySelector(".btn-danger").textContent=title
    }

    const baslikChange=(yeni)=>{
      baslik = yeni
      document.querySelector("h1").textContent=yeni
    }

  return (

    <div className='text-center countainer'>
    <h1> INFO : {baslik}</h1>
    <h2> COUNT: <span className='text-danger'>{count}</span></h2>
    <button onClick={arttir} className='btn btn-primary'>ARTTIR</button>
    <button onClick={()=>butonTitle("halil")} className='btn btn-danger m2'>DEGISTIR</button>
    <button onClick={()=>baslikChange("MerhabaKral")} className='btn btn-info'>TIKLANDI</button>
    
    </div>

  )
}



export default Events