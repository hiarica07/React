import React from 'react'

const Events = () => {
    let baslik = "Merhaba"
    let count = 0

    const arttir=()=>{
      count+=1
      console.log(count);
      document.querySelector("span").textContent=count
    }

  return (

    <div className='text-center countainer'>
    <h1> INFO : {baslik}</h1>
    <h2> COUNT: <span className='text-danger'>{count}</span></h2>
    <button onClick={arttir} className='btn btn-primary'>ARTTIR</button>
    </div>

  )
}

export default Events