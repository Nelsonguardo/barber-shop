import React from 'react'
import iconPhone from '../assets/icons/icon-phone.svg'
import iconEmail from '../assets/icons/icon-email.svg'

export const Contact = () => {
    return (
        <div className="py-12 px-6 text-white">
            <div className="max-w-2xl mx-auto text-center mb-8">
                <h1 className="text-4xl font-extrabold mb-4 tracking-tight">
                    Ponte en Contacto
                </h1>
                <p className="text-gray-300 text-base leading-relaxed">
                    Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-4">
                {/* --- Columna de contacto y horarios --- */}
                <div className="w-full lg:w-1/3 mx-auto text-center lg:text-left">
                    <h1 className="text-2xl font-semibold mb-4 border-b border-[#441D10] pb-2">
                        Información de Contacto
                    </h1>

                    <div className="space-y-4 mb-8">
                        <div className="flex justify-center lg:justify-start items-start">
                            <img src={iconPhone} alt="Teléfono" className="w-5 h-5 mt-1 mr-3 text-[#D44211]" />
                            <div className="flex flex-col">
                                <span className="font-semibold text-white">Teléfono</span>
                                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-start items-start">
                            <img src={iconEmail} alt="Correo electrónico" className="w-5 h-5 mt-1 mr-3 text-[#D44211]" />
                            <div className="flex flex-col">
                                <span className="font-semibold text-white">Correo electrónico</span>
                                <span className="text-gray-300 text-sm">contacto@barberpro.com</span>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-2xl font-semibold mb-4 border-b border-[#441D10] pb-2">
                        Horarios de Atención
                    </h1>

                    <div className="text-gray-300 text-sm">
                        <table className="w-full table-auto">
                            <tbody>
                                <tr className="border-b border-transparent">
                                    <td className="py-1">Lunes a Viernes</td>
                                    <td className="text-right font-semibold text-white">9:00 AM – 7:00 PM</td>
                                </tr>
                                <tr className="border-b border-transparent">
                                    <td className="py-1">Sábado</td>
                                    <td className="text-right font-semibold text-white">10:00 AM – 6:00 PM</td>
                                </tr>
                                <tr>
                                    <td className="py-1">Domingo</td>
                                    <td className="text-right font-semibold text-white">Cerrado</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* --- Columna del mapa --- */}
                <div className="w-full lg:w-1/2 mx-auto text-center px-2 sm:px-6">
                    <h1 className="text-2xl font-semibold mb-4 text-white">
                        Nuestra Ubicación
                    </h1>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                        Visítanos en nuestra barbería, ubicada en la zona norte de la ciudad.
                        Consulta el mapa interactivo para obtener las indicaciones precisas.
                    </p>

                    <div className="w-full h-64 sm:h-72 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            title="Mapa de ubicación de Dilan Barber"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.388143401872!2d-75.45159002496354!3d10.390714689735537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef625c142ead0ef%3A0x4883120d39c64c3d!2sUrbanizaci%C3%B3n%20brisas%20de%20Galicia!5e0!3m2!1ses-419!2sco!4v1762210396340!5m2!1ses-419!2sco"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
