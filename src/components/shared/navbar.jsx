import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar container">
            <div className="navbar-start mr-auto">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-black mr-2 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a className='text-black/90'>Home</a></li>
                        <li><a className='text-black/90'>FAQ</a></li>
                        <li><a className='text-black/90'>Changelog</a></li>
                        <li><a className='text-black/90'>Blog</a></li>
                        <li><a className='text-black/90'>Download</a></li>
                        <li><a className='text-black/90'>Contact</a></li>
                    </ul>
                </div>
                <h2 className='text-sm md:text-2xl font-bold capitalize text-[#130B2D]'>Ticket System</h2>
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
                <button type='button' className=" gap-2 border py-2 px-5 rounded-xl border-black/10 text-white font-semibold bg-[#632EE3] min-w-[150px] flex justify-center">
                    New Ticket
                </button>
            </div>
        </div>
    );
};

export default Navbar;