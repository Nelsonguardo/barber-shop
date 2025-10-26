import React from 'react'

const year = new Date().getFullYear();

export const Footer = () => {
    return (
        <> 
            <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-[#221510] text-white shadow-sm md:flex md:items-center md:justify-between md:p-6">
                <p className="text-sm text-gray-500  dark:text-gray-400">© {year} Mi Barbería. Todos los derechos reservados.</p>
            </footer>
        </>
    )
}
