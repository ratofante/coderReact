import { BsCart3 as CartIcon, BsPerson as PersonIcon } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';



const NavItems = (props) => {

    const urls = [
        { link: 'contact', icon: <PersonIcon /> },
        { link: 'cart', icon: <CartIcon /> }
    ];

    return (
        urls.map((link, index) => {
            return (
                <li className="nav-item" key={index}>
                    <NavLink className="icon-button" to={link.link}>
                        {link.icon}
                    </NavLink>
                </li>
            );
        })
    );
}
export default NavItems;

