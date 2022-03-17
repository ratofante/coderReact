import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

const NavItemDropdown = (props) => {

    const [open, setOpen] = useState('close');

    function toggleMenu() {
        open === 'open' ? setOpen('close') : setOpen('open');
    }

    return (
        <li className="nav-item">
            <div className="icon-button" onClick={() => { toggleMenu() }}>
                {props.icon}
            </div>
            {open === 'open' && <DropdownMenu closeMenu={menu => setOpen(menu)} />}
        </li>
    );
}
export default NavItemDropdown;