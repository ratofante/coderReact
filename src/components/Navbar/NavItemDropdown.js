import { useState, useContext } from "react";
import ClickOutside from "../../Hooks/clickOutside";
import DropdownMenu from "./DropdownMenu";
import { NavContext, NavContextProvider } from "./NavContextProvider";

const NavItemDropdown = (props) => {

    // const [open, setOpen] = useState('close');

    // function toggleMenu() {
    //     open === 'open' ? setOpen('close') : setOpen('open');
    // }

    const { menuState, setMenuState } = useContext(NavContext)

    return (
        <li className="nav-item">
            <div className="icon-button" onClick={() => { setMenuState(true) }}>
                {props.icon}
            </div>
            <ClickOutside>
                {menuState && <DropdownMenu />}
            </ClickOutside>

        </li>
    );
}
export default NavItemDropdown;