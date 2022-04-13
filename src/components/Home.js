import { Link, useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../CartContextProvider";
import OrderPurchased from "./OrderPurchased";


const Home = () => {

    let { success } = useParams();
    const [purchase, setPurchase] = useState(false);
    const [order, setOrder] = useState([]);
    const { cartItems, flushCartAndStorage } = useContext(CartContext);

    useEffect(() => {
        console.log(success);
        if (typeof (success) !== 'undefined' && cartItems.length > 0) {
            setOrder(cartItems);
            console.log(order);
            setPurchase(true);
            flushCartAndStorage();
        }
    }, []);

    console.log(purchase);

    return (<>
        <div className='home-section text-white p-3'>
            <section className="bg-gray-300 p-3 rounded">
                <h1 className="text-5xl text-center text-yellow-500 font-semibold text-shadow">React Pokémon Shop</h1>
                {purchase ? <OrderPurchased items={order} /> : <>
                    <h3 className="text-center mt-10 rounded">Go and buy some pokémons</h3>
                    <div className="go-products hover:text-yellow-500"><Link to={'/products'}>Check Products</Link></div>
                </>}
            </section>
            <div className="home-img-container">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png" alt="" />
            </div>
            <div className="home-img-container">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png" alt="" />
            </div>
        </div>
    </>)
}
export default Home