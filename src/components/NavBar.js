import { NavList } from "./NavList";

//ICONS
import { FaConnectdevelop } from 'react-icons/fa';
import { BsCart2 } from 'react-icons/bs';

const NavBar = () => {
    const title = 'React Store';
    return (
        <nav className='navbar sticky top-0 z-50 flex flex-row drop-shadow-lg shadow-black p-4 border-2 border-solid border-blue-900 rounded-b-lg bg-sky-900'>
            <div className='text-white flex'>
                <FaConnectdevelop className='my-auto w-12 h-12' />
            </div>
            <h4 className="text-3xl text-slate-200 font-bold ml-4 self-center">
                {title}
            </h4>
            <NavList />
            <div className='text-white flex'>
                <BsCart2 className='w-8 h-8  my-auto' />
            </div>
        </nav>
    );
}

export default NavBar;