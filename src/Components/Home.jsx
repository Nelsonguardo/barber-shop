import React, { useEffect, useState } from 'react'
import icon from "../assets/img/barba.webp";
import barberImage2 from '../assets/img/barber-image2.webp'
import barberImage from '../assets/img/barber-image.webp'
import { useNavigate } from 'react-router-dom'

export const Home = () => {

    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        // Simula carga de datos o inicialización
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // 3 segundos de "carga"
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <img
                    src={icon}
                    alt="Cargando..."
                    className="w-32 h-32 animate-pulse"
                />
            </div>
        );
    }

    return (
        <>
            <section>
                <div className='relative w-full h-96'>
                    <img
                        className="h-full w-full object-cover object-center"
                        src={barberImage}
                        alt="Barber Shop"
                    />
                    <div className='absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4'>
                        <h1 className='text-center text-4xl font-bold mb-2'>
                            <strong>
                                Tu estilo, Nuestra Pasión
                            </strong>
                        </h1>
                        <div className='flex flex-col'>
                            <p className='text-base leading-relaxed'>Experimenta el arte del cuidado personal en un ambiente moderno y relajante.</p>
                            <p className='text-base leading-relaxed'>Nuestros expertos barberos están dedicados a realizar tu estilo personal con cortes precisos.</p>
                            <p className='text-base leading-relaxed mb-4'>Servicios de alta calidad para realzar tu confianza.</p>

                            <button
                                type="button"
                                id="book-appointment"
                                className="px-4 py-2 mt-2 text-sm font-medium text-white bg-[#D44211] hover:bg-[#bf3b0f] rounded-md transition-colors self-start"
                                onClick={() => navigate('/book-appointment')}
                            >
                                Reservar Cita
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-12 px-4'>
                <div>
                    <h1 className='text-center text-2xl font-bold mb-2'>

                        Galeria

                    </h1>
                    <div className='grid grid-cols-2 md:grid-cols-6 gap-4 py-8'>
                        <div>
                            <img className="h-auto max-w-full rounded-lg transition-transform duration-300 hover:scale-110"
                                src={barberImage}
                                alt="Barber Shop"
                            />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg transition-transform duration-300 hover:scale-125"
                                src={barberImage}
                                alt="Barber Shop"
                            />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg transition-transform duration-300 hover:scale-125"
                                src={barberImage}
                                alt="Barber Shop"
                            />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg transition-transform duration-300 hover:scale-125"
                                src={barberImage}
                                alt="Barber Shop"
                            />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg transition-transform duration-300 hover:scale-125"
                                src={barberImage}
                                alt="Barber Shop"
                            />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg transition-transform duration-300 hover:scale-110"
                                src={barberImage}
                                alt="Barber Shop"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-2 px-4 mb-16'>
                <div>
                    <h2 className='text-center text-2xl font-bold mb-2'>

                        Nuestro Ambiente

                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 max-w-6xl mx-auto">
                        <div>
                            <img
                                className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-lg transition-transform duration-300 hover:scale-125"
                                src={barberImage2}
                                alt="Barber Shop"
                            />
                        </div>
                        <div>
                            <img
                                className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-lg transition-transform duration-300 hover:scale-125"
                                src={barberImage2}
                                alt="Barber Shop"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
