import { useParams } from "react-router-dom";
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
        <div className='text-white mt-24 p-3'>
            <h1 className="text-5xl text-center">React Pokémon Shop</h1>
            <section>
                {purchase ? <OrderPurchased items={order} /> : 'Go and buy some pokémons'}
            </section>
        </div>
    </>)
}
export default Home