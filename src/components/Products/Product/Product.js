
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FirebaseApp from '../../../credentials';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ProductCard from './ProductCard';

const db = getFirestore(FirebaseApp);

const Product = () => {

   const [productData, setProductData] = useState(null);
   let { id } = useParams();

   useEffect(() => {
      asynCall();
   }, [id]);

   //query a firebase
   const asynCall = async () => {
      let docRef = doc(db, 'products', id);
      let docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
         setProductData(docSnap.data());
      } else {
         console.log('ups!');
      }
   }

   return (
      <>
         {productData && <ProductCard product={productData} />}
      </>
   )
}

export default Product;