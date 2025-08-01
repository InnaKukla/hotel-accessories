import React from 'react'
// import { useParams } from 'react-router'
import Product from '../../components/Product/Product';
import Prefooter from '../../components/Prefooter/Prefooter';

const ProductPage = () => {
//    const params = useParams()
   console.log("products page");
   
   return (
    <div>
     <Product/>
     <Prefooter/>
    </div>
  )
}

export default ProductPage
