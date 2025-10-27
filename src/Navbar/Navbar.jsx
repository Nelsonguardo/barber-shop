import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import icon from '../assets/img/barba.webp'

export const Navbar = () => {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="bg-[#221510] text-white">
                <div className="relative flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={icon} className="h-8 mr-3" alt="Logo Barber Shop" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Barber Shop</span>
                    </Link>

                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-[#221510] dark:focus:ring-[#221510]"
                        aria-controls="navbar-default"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button> 

                    <div className={`${isOpen ? 'absolute top-full left-0 w-full bg-[#221510] z-20' : 'hidden'} md:block md:w-auto md:static md:bg-transparent`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:bg-transparent">
                            <li>
                                <NavLink onClick={() => setIsOpen(false)} className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0" aria-current="page" to="/home">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setIsOpen(false)} className="block py-2 px-3 text-white rounded-sm md:bg-transparent  md:p-0" to="/services">Servicios</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setIsOpen(false)} className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0" to="/about">Sobre Mi</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setIsOpen(false)} className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0" to="/contact">Contacto</NavLink>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    id="book-appointment"
                                    className="px-3 py-2 text-xs font-medium text-center text-white bg-[#D44211] hover:bg-[#bf3b0f] rounded-md transition-colors"
                                    onClick={() => { setIsOpen(false); navigate('/book-appointment'); }}
                                >
                                    <span className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0">Reservar Cita</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="border-t-1 border-[#D44211]" />
            </nav>
        </>
    )
}
