import React from 'react'
import ProductCard from './ProductCard'
import "./Products.scss"

const Products = ({products}) => {
   
  return (
    <div className="urun-list">
      {/*//! Buradan spreadle açarak gönderip objenin propertylerini props objesine yerleştirme */}
      {products.map((ürün) => (
        <ProductCard key={ürün.id} {...ürün} />
      ))}

      {/*//! Best Practice Alt Componente Gönderme */}
      {/*//! Buradan açmadan gönderip alt componentte karşılayıp içini açma */}
      {/* {products.map((ürün) => (
        <ProductCard key={ürün.id} ürün={ürün} />
      ))} */}

    
      
   
      
    </div>
  );
}

export default Products
