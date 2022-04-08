// ICONS
import { BiStore as StoreIcon } from 'react-icons/bi';
import logo from './shop-logo.png';
//Components
import DropdownMenu from "./DropdownMenu";
import NavItemDropdown from "./NavItemDropdown";
import NavItems from "./NavItems";
import { Link } from 'react-router-dom';
import NavContextProvider from './NavContextProvider';

export const Navbar = () => {
    return (

        <NavContextProvider>
            <nav className='navbar fixed w-screen'>
                <ul className="navbar-nav">
                    <div className='navbar-logo'>
                        <Link to={'/home'}>
                            <img className='navbar-logo-img' src={logo} alt="shop-logo" />
                        </Link>
                        <h2 className="navbar-logo-title">SHOP</h2>
                    </div>

                    <NavItems />
                    <NavItemDropdown icon={<StoreIcon />}>
                        <DropdownMenu />
                    </NavItemDropdown>
                </ul>
                <div id="nav-message" className='hide-nav-msg'> Item added to Cart! </div>
            </nav>

        </NavContextProvider>
    );
}
export default Navbar;