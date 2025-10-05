import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar container">
            <div className="navbar-start mr-auto">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <h2 className='text-lg md:text-2xl font-bold capitalize text-[#130B2D]'>CS — Ticket System</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className='text-black/90'>Home</a></li>
                    <li><a className='text-black/90'>FAQ</a></li>
                    <li><a className='text-black/90'>Changelog</a></li>
                    <li><a className='text-black/90'>Blog</a></li>
                    <li><a className='text-black/90'>Download</a></li>
                    <li><a className='text-black/90'>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end w-auto">
                <button type='button' className="flex gap-2 border py-3 px-6 rounded-xl border-black/10 text-white font-semibold bg-[#632EE3]">
                    New Ticket
                </button>
            </div>
        </div>
    );
};

export default Navbar;