import ProductCard from './ProductCard-old';

import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {

    const URL = 'https://pokeapi.co/api/v2/pokemon/';
    let { id } = useParams();
    //console.log(id);

    const [product, setProduct] = useState('');

    useEffect(() => {
        getProduct();
    }, [id]);

    const getProduct = async () => {
        try {
            const response = await fetch(URL + id)
            const data = await response.json();

            setProduct(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {product && <ProductCard props={product} />}
        </>
    );
}

export default Product