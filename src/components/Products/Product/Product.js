import ProductCard from './ProductCard';

import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {

    const URL = 'https://pokeapi.co/api/v2/pokemon/';
    let { id } = useParams();
    //console.log(id);

    const [product, setProduct] = useState('');

    useEffect(() => {
        getProduct();
        return console.log(product);
    }, [id]);

    /*const getProduct = () => {
        fetch(URL + id)
            .then((resp) => resp.json())
            .then((resp) => {setProduct(resp); console.log(product)})
            .catch((error) => console.log(error))
    }*/

    const getProduct = async () => {
        try {
            const response = await fetch(URL + id)
            const data = await response.json();

            setProduct(data);
            console.log(data);
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