import { BsCart3 as CartIcon, BsPerson as PersonIcon } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../CartContextProvider';



const NavItems = () => {

    const { items } = useContext(CartContext);

    return (<>
        <li className="nav-item">
            <NavLink className="icon-button" to={'contact'}>
                <PersonIcon />
            </NavLink>
        </li>
        <li className="nav-item">
            {items > 0 && <div className='items-in-cart'>{items}</div>}
            <NavLink className="icon-button" to={'cart'}>
                <CartIcon />
            </NavLink>
        </li>
    </>);
}
export default NavItems;

