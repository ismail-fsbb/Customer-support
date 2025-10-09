import React from 'react';
import { BsEnvelopeFill } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='py-20 bg-black'>
            <div className="container">
                <div className="grid grid-cols-12 gap-4 md:gap-6">
                    <div className="col-span-12 md:col-span-6 xl:col-span-3 space-y-2">
                        <h2 className='text-white text-2xl font-bold capitalize'>CS — Ticket System</h2>
                        <p className='text-[#A1A1AA]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="col-span-12 md:col-span-3 xl:col-span-2 space-y-5">
                        <h4 className='font-medium text-xl text-white capitalize'>Company</h4>
                        <ul className='space-y-3'>
                            <li><a href="#" className='capitalize text-base text-[#A1A1AA] hover:text-white transition-all duration-500'>About Us</a></li>
                            <li><a href="#" className='capitalize text-base text-[#A1A1AA] hover:text-white transition-all duration-500'>Our Mission</a></li>
                            <li><a href="#" className='capitalize text-base text-[#A1A1AA] hover:text-white transition-all duration-500'>Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-3 xl:col-span-2 space-y-5">
                        <h4 className='font-medium text-xl text-white capitalize'>Services</h4>
                        <ul className='space-y-3'>
                            <li><a href="#" className='capitalize text-base text-[#A1A1AA] hover:text-white transition-all duration-500'>Products & Services</a></li>
                            <li><a href="#" className='capitalize text-base text-[#A1A1AA] hover:text-white transition-all duration-500'>Customer Stories</a></li>
                            <li><a href="#" className='capitalize text-base text-[#A1A1AA] hover:text-white transition-all duration-500'>Download Apps</a></li>
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-6 xl:col-span-2 space-y-5">
                        <h4 className='font-medium text-xl text-white capitalize'>Information</h4>
                        <ul className='space-y-3'>
                            <li><a href="#" className='capitalize text-base text-[#A1A1AA] hover:text-white transition-all duration-500'>Privacy Policy</a></li>
                            <li><a href="#" className='capitalize text-base text-[#A1A1AA] hover:text-white transition-all duration-500'>Terms & Conditions</a></li>
                            <li><a href="#" className='capitalize text-base text-[#A1A1AA] hover:text-white transition-all duration-500'>Join Us</a></li>
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-6 xl:col-span-2 space-y-5">
                        <h4 className='font-medium text-xl text-white capitalize'>Social Links  </h4>
                        <ul className='space-y-3'>
                            <li>
                                <a href="#" className='capitalize text-base text-[#A1A1AA] hover:text-white transition-all duration-500 flex gap-2 items-center'>
                                    <FaXTwitter className='w-5 h-5 rounded-full bg-white text-black p-1' />
                                    @CS — Ticket System
                                </a>
                            </li>
                            <li>
                                <a href="#" className='capitalize text-base text-[#A1A1AA] hover:text-white transition-all duration-500 flex gap-2 items-center'>
                                    <FaLinkedinIn className='w-5 h-5 rounded-full bg-white text-black p-1' />
                                    @CS — Ticket System
                                </a>
                            </li>
                            <li>
                                <a href="#" className='capitalize text-base text-[#A1A1AA] hover:text-white transition-all duration-500 flex gap-2 items-center'>
                                    <FaFacebookF className='w-5 h-5 rounded-full bg-white text-black p-1' />
                                    @CS — Ticket System
                                </a>
                            </li>
                            <li>
                                <a href="#" className='capitalize text-base text-[#A1A1AA] hover:text-white transition-all duration-500 flex gap-2 items-center'>
                                    <BsEnvelopeFill className='w-5 h-5 rounded-full bg-white text-black p-1' />
                                    support@cst.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;