import React from 'react';



export const NavList = (props) => {
    return (
        <div className="flex ml-auto md:pr-12">
            <ul className="flex flex-col xs:flex-row  my-auto">
                <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#cat">
                        Categories
                    </a>
                </li>
                <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#cat">
                        Latest
                    </a>
                </li>
                <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#cat">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}

