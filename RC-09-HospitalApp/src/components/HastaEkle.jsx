import React, { useState } from 'react'
import uuid from 'react-uuid'

const HastaEkle = ({hastalar, setHastalar,doktorlar}) => {
const[hastaName,setHastaName]=useState("")
const[hastaTarih,setTarih]=useState("")

const handleSubmitt=(e)=>{
e.preventDefault()// direk submit olayını yapma önce alttaki kodlara bak

setHastalar([...hastalar, {
  id: uuid(),
  text: hastaName,
  day: hastaTarih,
  isDone: false,
  myDoctor: doktorlar[0].doctorName}])

// setHastalar a gidildiginde hemen altta console log var ise calisir, usestate in yaptigi isi goremeyiz.Bunun icin log submit fonksiyonunun sonrasinda yazilmalidir 
setHastaName("")
setTarih("")
// submit sonrası inputlardan value temizlemek için, hem ustteki işlemler yapılır, hemde inputlarda value={isim} yazarak browser da boşluksa boşluk isimse isim gözükmesi sağlanır
}

  return (
    <div>
      <form onSubmit={handleSubmitt}>
        <div className="formControl">
          <label htmlFor="text">Hasta Bilgileri</label>
          <input
            type="text"
            id="text"
            onChange={(e) => setHastaName(e.target.value)}
            value={hastaName}
          />
        </div>

        <div className="formControl">
          <label htmlFor="day">Day & Time</label>
          <input
            type="datetime-local"
            id="day"
            onChange={(e) => setTarih(e.target.value)}
            value={hastaTarih}
          />
        </div>

        <button type="submit" className="kayit btn-submit">
          <span style={{ color: "#6a0707" }}>{doktorlar[0].doctorName}</span> için kayıt
          oluştur
        </button>
      </form>
    </div>
  );
}

export default HastaEkle