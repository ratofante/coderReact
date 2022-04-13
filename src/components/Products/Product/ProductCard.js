import { useEffect, useState } from 'react';
import { VscChromeClose as CrossIcon } from 'react-icons/vsc';
import { IoIosArrowUp } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Details from './Details';
import ProductCardFooter from './ProductCardFooter';
import Reviews from './Reviews';
import { connectFirestoreEmulator } from 'firebase/firestore';

const ProductCard = (props) => {

   const { product } = props;
   const navigate = useNavigate();
   const [details, setDetails] = useState(false);

   const toggleDetails = () => {
      const icon = document.getElementById('detailBtn').children[0].classList;
      const div = document.getElementById('product-card-details').classList;
      if (icon.contains('look-up')) {
         div.remove('details-max-height');
         div.add('details-min-height');
         icon.remove('look-up');
         icon.add('look-down');
      } else {
         div.remove('details-min-height');
         div.add('details-max-height');
         icon.add('look-up');
         icon.remove('look-down');
      }
      setDetails(!details);
   }

   useEffect(() => {
      let card = document.getElementById('product-card-container');
      if (card.classList.contains('move-left')) {
         card.classList.remove('move-left');
      }
   })

   return (
      <div id="product-card-container">
         <section className="text-gray-700 body-font overflow-hidden bg-white rounded">
            <div className="exit-product">
               <button onClick={() => navigate(-1)} className="text-gray-700">
                  <CrossIcon className="exit-product-icon" />
               </button>
            </div>
            <div className="product-card container mx-auto">
               <div className="lg:w-4/5 mx-auto flex flex-wrap">

                  <div className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200">
                     <img alt="ecommerce" className="product-card-img" src={product.bigImg} />
                  </div>

                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                     <h2 className="text-sm title-font text-gray-500 tracking-widest">
                        Product n° {product.key.substring(4)}
                     </h2>
                     <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                        {product.name.slice(0, 1).toUpperCase() + product.name.slice(1)}
                     </h1>
                     <div className="flex mb-4">
                        <Reviews />
                        <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                           <div className="product-card-small-img">
                              <img src={product.smallImgFront} alt={product.name} />
                           </div>
                           <div className="product-card-small-img">
                              <img src={product.smallImgBack} alt={product.name} />
                           </div>
                        </span>
                     </div>
                     <div id="product-card-details">
                        <button id="detailBtn" onClick={() => { toggleDetails() }} className="flex flex-row items-center">
                           Details <IoIosArrowUp className='ml-3' />
                        </button>
                        {details && <Details data={product} />}
                     </div>
                     <ProductCardFooter product={product} />
                  </div>
               </div>
            </div>
         </section >
      </div>
   )
}

export default ProductCard