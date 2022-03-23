import { VscChromeClose as CrossIcon } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import ProductCardFooter from './ProductCardFooter';

const ProductCard = (props) => {

   const { product } = props;

   return (
      <div id="product-card-container">
         <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="exit-product">
               <Link to={'/products'} className="text-gray-700">
                  <CrossIcon className="exit-product-icon" />
               </Link>
            </div>
            <div className="product-card container mx-auto">
               <div className="lg:w-4/5 mx-auto flex flex-wrap">

                  <div className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200">
                     <img alt="ecommerce" className="product-card-img" src={product.bigImg} />
                  </div>

                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                     <h2 className="text-sm title-font text-gray-500 tracking-widest">
                        Product n° {product.key}
                     </h2>
                     <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                        {product.name.slice(0, 1).toUpperCase() + product.name.slice(1)}
                     </h1>
                     <div className="flex mb-4">
                        <span className="flex justify-center flex-col md:flex-row items-center">
                           <div className="stars-review">
                              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                           </div>
                           <span className="text-gray-600 md:ml-3">4 Reviews</span>
                        </span>
                        <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                           <div className="product-card-small-img">
                              <img src={product.smallImgFront} alt={product.name} />
                           </div>
                           <div className="product-card-small-img">
                              <img src={product.smallImgBack} alt={product.name} />
                           </div>
                        </span>
                     </div>
                     <details className="leading-relaxed">
                        <summary>
                           Details
                        </summary>
                        <div>
                           <p>Base Exp: {product.baseExp}</p>
                           <p>Height: {product.height}</p>
                           <p>Health Points: {product.hp}</p>
                           <p>Attack: {product.attack}</p>
                           <p>Defense: {product.defense}</p>
                           <p>Special Attack: {product.specialAttack}</p>
                           <p>Special Defense: {product.specialDefense}</p>
                           <p>Speed: {product.speed}</p>
                           <p>Weight: {product.weight}</p>
                        </div>
                     </details>

                     <ProductCardFooter product={product} />

                  </div>
               </div>
            </div>
         </section >
      </div>
   )
}

export default ProductCard