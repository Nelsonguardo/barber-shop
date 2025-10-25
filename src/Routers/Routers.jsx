import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../Components/Home'
import { Services } from '../Components/Services'
import { AboutMe } from '../Components/AboutMe'
import { Contact } from '../Components/Contact'
import { BookAppointment } from '../Components/BookAppointment'
import { Error } from '../Components/Error'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'

export const Routers = () => {
    return (
        <BrowserRouter>

            <Navbar />

            <section className="mt-4 px-4">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/about' element={<AboutMe />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/book-appointment' element={<BookAppointment />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </section>

            <Footer />

        </BrowserRouter>
    )
}
