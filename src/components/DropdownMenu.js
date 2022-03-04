import { useState } from 'react';
//Library
import { CSSTransition } from 'react-transition-group';
//Icons
import { BiStore as StoreIcon } from 'react-icons/bi';
import { BsChevronRight as ArrowRight } from 'react-icons/bs';
import { BsChevronLeft as ArrowLeft } from 'react-icons/bs';
import { MdOutlineGroupWork as GroupIcon } from 'react-icons/md';


const DropdownMenu = (props) => {



    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight + 30;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            // onClick chequeamos primero que exista la prop.goToMenu para luego
            //ejecutar el cambio de estado.
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>

                {props.children}

                <span className="icon-right">{props.rightIcon}</span>
            </a>
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
                    <DropdownItem leftIcon={<StoreIcon />}>All Products</DropdownItem>
                    <DropdownItem
                        leftIcon={<GroupIcon />}
                        rightIcon={<ArrowRight />}
                        goToMenu="types">
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
                    <DropdownItem>Type 1</DropdownItem>
                    <DropdownItem>Type 2</DropdownItem>
                    <DropdownItem>Type 3</DropdownItem>
                    <DropdownItem>Type 1</DropdownItem>
                    <DropdownItem>Type 2</DropdownItem>
                    <DropdownItem>Type 3</DropdownItem>
                    <DropdownItem>Type 1</DropdownItem>
                    <DropdownItem>Type 2</DropdownItem>
                    <DropdownItem>Type 3</DropdownItem>
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