//ICONS
import { VscChromeClose as CrossIcon } from 'react-icons/vsc';
import { BsCart3 as CartIcon } from 'react-icons/bs';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductCardFooter from './ProductCardFooter';

const ProductCard = (props) => {

    const d = props.props;
    return (
        <div className="product-card-container">
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="exit-product">
                    <Link to={'/products'}>
                        <CrossIcon className="exit-product-icon" />
                    </Link>
                </div>
                <div className="product-card container mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200">
                            <img alt="ecommerce" className="product-card-img" src={d.sprites.other['official-artwork'].front_default} />
                        </div>

                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">Product n° {d.id}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{d.name.slice(0, 1).toUpperCase() + d.name.slice(1)}</h1>
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
                                        <img src={d.sprites.front_default} alt={d.name} />
                                    </div>
                                    <div className="product-card-small-img">
                                        <img src={d.sprites.back_default} alt={d.name} />
                                    </div>
                                </span>
                            </div>
                            <details className="leading-relaxed">
                                <summary>
                                    Details
                                </summary>
                                <div>
                                    <p>Base Exp: {d.base_experience}</p>
                                    <p>Height: {d.height}</p>
                                    <p>Health Points: {d.stats[0].base_stat}</p>
                                    <p>Attack: {d.stats[1].base_stat}</p>
                                    <p>Defense: {d.stats[2].base_stat}</p>
                                    <p>Special Attack: {d.stats[3].base_stat}</p>
                                    <p>Special Defense: {d.stats[4].base_stat}</p>
                                    <p>Speed: {d.stats[5].base_stat}</p>
                                    <p>Weight: {d.weight}</p>
                                </div>
                            </details>
                            <ProductCardFooter props={d} />
                        </div>
                    </div>
                </div>
            </section >
        </div>
    );
}

export default ProductCard

/* 
<p>Name: {d.name}</p>
            <p>Base Exp: {d.base_experience}</p>
            <p>Height: {d.height}</p>
            <p>Health Points: {d.stats[0].base_stat}</p>
            <p>Attack: {d.stats[1].base_stat}</p>
            <p>Defense: {d.stats[2].base_stat}</p>
            <p>Special Attack: {d.stats[3].base_stat}</p>
            <p>Special Defense: {d.stats[4].base_stat}</p>
            <p>Speed: {d.stats[5].base_stat}</p>
            <p>Weight: {d.weight}</p>

            <img src={d.sprites.back_default} alt="img" />
            <img src={d.sprites.back_shiny} alt="img" />
            <img src={d.sprites.front_default} alt="img" />
            <img src={d.sprites.front_shiny} alt="img" />




<p>Name: {d.name}</p>
            <p>Base Exp: {d.base_experience}</p>
            <p>Height: {d.height}</p>
            <p>Health Points: {d.stats[0].base_stat}</p>
            <p>Attack: {d.stats[1].base_stat}</p>
            <p>Defense: {d.stats[2].base_stat}</p>
            <p>Special Attack: {d.stats[3].base_stat}</p>
            <p>Special Defense: {d.stats[4].base_stat}</p>
            <p>Speed: {d.stats[5].base_stat}</p>
            <p>Weight: {d.weight}</p>

            <img src={d.sprites.back_default} alt="img" />
            <img src={d.sprites.back_shiny} alt="img" />
            <img src={d.sprites.front_default} alt="img" />
            <img src={d.sprites.front_shiny} alt="img" />


*/