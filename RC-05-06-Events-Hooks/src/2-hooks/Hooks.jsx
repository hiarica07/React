//* ==================== HOOKS ===============================
//! Hook’lar fonksiyonel component’ler icerisinde state’leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler’in
//! kullanimini cok azaltmistir.
//? React’ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.
//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from “react”;
//* 2. Hook’lar ust seviyede tanimlanmalidir. Yani Hook’lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook’lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook’lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react/hooks#state-hooks
//* =============================================================

import React, { useState } from "react";

const Hooks = () => {
  const [sayac, setSayac] = useState(0);
  const [kisi, setKisi] = useState({
    isim: "mustafa",
    meslek: "developer",
    yas: "45",
    renk: "red",
  });
  const arttir = () => {
    setSayac(sayac + 1);
  };

  const changeAll = () =>{
    setKisi({  
        isim: "halil",
        meslek: "junior-dev",
        yas: "28",
        renk: "black",})
  }
  return (
    <div className="container text-center">
      <h1>*****************</h1>
      <h1>USESTATE</h1>
      <h2 className="text-danger">COUNT:{sayac}</h2>
      <button onClick={arttir} className="btn btn-primary">
        ARTTIR
      </button>
      <h1 className="mt-5">USESTATE OBJECT KULLANIMI</h1>
      <div style={{color:kisi.renk}}>
      <h1>{kisi.isim}</h1>
      <h1>{kisi.meslek}</h1>
      <h1>{kisi.yas}</h1>
      <h1>{kisi.renk}</h1>
      </div>
      <button onClick={changeAll} className="btn btn-primary m-2">CHANGEall</button>
      <button className="btn btn-info">CHANGEname</button>
      
    </div>
  );
};

export default Hooks;
