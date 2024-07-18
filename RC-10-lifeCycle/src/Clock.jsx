import React, { useEffect, useState } from "react";

// //?==================================================================
// //?                       USEEFFECT HOOK
// //?==================================================================
// //! The Effect Hook,function componentlerde yan etkiler gerçekleştirmenizi sağlar.
// //! useEffect Hook'u componentDidMount, componentDidUpdate ve componentWillUnmount olarak düşünebiliriz..setInterval, fetch axios ile veri çekme ve mesela dizi her değiştiğinde set et (yani istediğim bişeyi yap) demek için kullanılır

// //! useEffect(() => {
// //*   /* ComponentDidMount code */
// //! }, []);

// //! useEffect(() => {
// //*   */ componentDidUpdate code */
// //! }, [var1, var2]);

// //! useEffect(() => {

// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, []);

// //! useEffect(() => {
// //*   //* componentDidMount code + componentDidUpdate code */

// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, [var1, var2]);

import moment from "moment";

//   https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/

const Clock = () => {
  const [zaman, setZaman] = useState(moment());
  const [sayac, setSayac] = useState(0);

  //!component ilk yüklendiginde calis componentDidMount()

  useEffect(() => {
    const timeZ = setInterval(() => {
      console.log("selam");
      setZaman(moment());
    }, 1000);

    //!component kapandığında yada başka sayfaya gidildiğinde çalışmamız dursun istersek alttaki return ü yazıyoruz
    //!componentWillUnmount(),
    return () => {
      console.log("component dead");
      clearInterval(timeZ);
    };
  }, []);

  //!component update edildiginde calis componentDidUpdate()

  useEffect(() => {
    // alert("hey yo")
  }, [sayac]);

  return (
    <div>
      <div>
        {zaman.format("HH")}:{zaman.format("mm")}:{zaman.format("ss")}
      </div>
      <h1 className="text-danger">SAYAC:{sayac}</h1>
      <button onClick={() => setSayac(sayac + 1)} className="btn btn-primary">
        ARTTIR
      </button>
    </div>
  );
};

export default Clock;
