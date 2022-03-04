/*import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';*/

/*const saludo = {
    greetings: 'Welcome to React Store',
}*/

import React from "react";
//COMPONENTS
import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import DropdownMenu from "./components/DropdownMenu";
// ICONS
import { MdOutlineCategory as CategoryIcon } from "react-icons/md";

function App() {
    return (
        <>
            <Navbar>
                <NavItem icon={<CategoryIcon />} />
                <NavItem icon={<CategoryIcon />} />
                <NavItem icon={<CategoryIcon />} />

                <NavItem icon={<CategoryIcon />}>
                    <DropdownMenu />
                </NavItem>
            </Navbar>
        </>
    );
}
export default App;