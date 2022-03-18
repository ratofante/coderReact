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
                classNames='menu-secondary'
                onEnter={calcHeight}
            >
                <div className='menu'>
                    <DropdownItem>
                        <Link
                            to="/products/type/1"
                            onClick={() => { setMenuState(!menuState) }}>
                            Type 1
                        </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link
                            to="/products/type/2"
                            onClick={() => { setMenuState(!menuState) }}>
                            Type 2
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