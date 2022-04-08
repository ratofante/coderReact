//Library
import { CSSTransition } from 'react-transition-group';
//Icons
import { BiStore as StoreIcon } from 'react-icons/bi';
import { BsChevronRight as ArrowRight, BsChevronLeft as ArrowLeft } from 'react-icons/bs';
import { MdOutlineCategory as TypesIcon } from "react-icons/md";

//React
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavContext } from './NavContextProvider';


const DropdownMenu = (props) => {

    const { menuState, setMenuState } = useContext(NavContext);

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight + 30;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            // onClick chequeamos primero que exista la prop.goToMenu para luego ejecutar el cambio de estado.
            <div className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>

                {props.children}

                <span className="icon-right">{props.rightIcon}</span>
            </div>
        );
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }}>
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames='menu-primary'
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem onClick={() => console.log('ey!')}
                        leftIcon={<StoreIcon />}
                    >
                        <Link to="/products" onClick={() => { setMenuState(!menuState) }}>All Products</Link>
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<TypesIcon />}
                        rightIcon={<ArrowRight />}
                        goToMenu="types"
                    >
                        Types
                    </DropdownItem>
                </div>

            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'types'}
                unmountOnExit
                timeout={500}
                classNames='menu-secondary menu-types'
                onEnter={calcHeight}
            >
                <div className='menu'>
                    <DropdownItem>
                        <Link
                            to="/products/Bug"
                            onClick={() => { setMenuState(!menuState) }}>
                            Bug
                        </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link
                            to="/products/Dragon"
                            onClick={() => { setMenuState(!menuState) }}>
                            Dragon
                        </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link
                            to="/products/Electric"
                            onClick={() => { setMenuState(!menuState) }}>
                            Electric
                        </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link
                            to="/products/Fairy"
                            onClick={() => { setMenuState(!menuState) }}>
                            Fairy
                        </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link
                            to="/products/Fighting"
                            onClick={() => { setMenuState(!menuState) }}>
                            Fighting
                        </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link
                            to="/products/Fire"
                            onClick={() => { setMenuState(!menuState) }}>
                            Fire
                        </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link
                            to="/products/Flying"
                            onClick={() => { setMenuState(!menuState) }}>
                            Flying
                        </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link
                            to="/products/Ghost"
                            onClick={() => { setMenuState(!menuState) }}>
                            Ghost
                        </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link
                            to="/products/Grass"
                            onClick={() => { setMenuState(!menuState) }}>
                            Grass
                        </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link
                            to="/products/Ground"
                            onClick={() => { setMenuState(!menuState) }}>
                            Ground
                        </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link
                            to="/products/Ice"
                            onClick={() => { setMenuState(!menuState) }}>
                            Ice
                        </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link
                            to="/products/Normal"
                            onClick={() => { setMenuState(!menuState) }}>
                            Normal
                        </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link
                            to="/products/Psychic"
                            onClick={() => { setMenuState(!menuState) }}>
                            Psychic
                        </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link
                            to="/products/Rock"
                            onClick={() => { setMenuState(!menuState) }}>
                            Rock
                        </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link
                            to="/products/Steel"
                            onClick={() => { setMenuState(!menuState) }}>
                            Steel
                        </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link
                            to="/products/Water"
                            onClick={() => { setMenuState(!menuState) }}>
                            Water
                        </Link>
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<ArrowLeft />}
                        goToMenu="main">
                        Back
                    </DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}

export default DropdownMenu