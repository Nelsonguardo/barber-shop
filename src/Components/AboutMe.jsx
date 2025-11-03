import React from 'react'
import perfil from '../assets/img/perfilbarbero.jpg'
import barberImage from '../assets/img/barber-image.webp'

export const AboutMe = () => {
    return (
        <div>
            <section className='py-6 px-6'>
                <h1 className='text-3xl font-extrabold mb-2 text-center'>Sobre Mí</h1>
                <p className='text-gray-300 text-center'>Descubre la historia y la pasión detrás de cada corte.</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start p-8 rounded-lg">
                {/* Columna izquierda */}
                <div>
                    <h2 className="text-2xl font-extrabold mb-2 text-white">Mi Historia</h2>
                    <p className="text-gray-300 mb-10">
                        Desde que tengo memoria, la barbería ha sido mi pasión. Comencé mi viaje en 2020, con la visión de crear un espacio único donde la tradición del oficio se fusiona con un toque personal y moderno. Lo que empezó como un sueño en un pequeño rincón de la ciudad, se ha convertido en mi proyecto de vida, un lugar donde cada cliente es tratado como familia.
                    </p>
                    <h2 className="text-2xl font-extrabold mb-2 text-white">Mi Filosofía</h2>
                    <p className="text-gray-300">
                        Creo firmemente que un corte de pelo es mucho más que un servicio; es una forma de arte y una experiencia personal. Me dedico a ofrecer a cada cliente un momento de desconexión y confianza, asegurando que cada visita sea una oportunidad para renovar su estilo y sentirse en su mejor versión. La calidad, la atención al detalle y la pasión por mi trabajo son los pilares de mi barbería.
                    </p>
                </div>

                {/* Columna derecha */}
                <div className="flex justify-center">
                    <img
                        src={barberImage}
                        alt="barbería"
                        className="rounded-lg w-full max-w-md object-cover"
                    />
                </div>
            </div>

            <div className="py-12 px-6 flex flex-col items-center text-center text-white">

                <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
                    Un Barbero con Experiencia
                </h1>


                <p className="text-gray-300 max-w-xl leading-relaxed mb-6">
                    Mi pasión por el arte de la barbería se refleja en cada corte. Con años de
                    experiencia y una dedicación constante a perfeccionar mi técnica, garantizo
                    un servicio de la más alta calidad.
                </p>


                <img
                    src={perfil}
                    alt="Perfil del Barbero"
                    className="rounded-full w-40 h-40 sm:w-56 sm:h-56 object-cover mb-6"
                />


                <h2 className="text-2xl font-extrabold mb-1">Dilan Guardo</h2>
                <p className="text-[#D44211] font-medium mb-4">Barbero Profesional</p>


                <p className="text-gray-300 max-w-md leading-relaxed">
                    Con más de 5 años de experiencia, domino tanto las técnicas tradicionales
                    a navaja como las últimas tendencias en estilo masculino. Mi objetivo es
                    crear el look perfecto que resalte tu personalidad y estilo.
                </p>
            </div>

            <div className="py-12 px-6 flex flex-col items-center text-center text-white">
                {/* Título */}
                <h1 className="text-3xl font-extrabold mb-4">Testimonios de Clientes</h1>
                <p className="text-gray-300 max-w-2xl mb-10">
                    La confianza de nuestros clientes es nuestro mayor logro.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">

                    {/* Testimonio 1 */}
                    <div className="bg-[#1e1511] border border-[#221510] rounded-xl p-6 shadow-md flex flex-col justify-between text-left">
                        <p className="text-gray-200 leading-relaxed mb-6">
                            "El mejor corte que he tenido. Marco es un verdadero artista y el ambiente
                            de la barbería es increíble. ¡Totalmente recomendado!"
                        </p>
                        <div className="flex items-center gap-4 mt-auto">
                            <img
                                src={perfil}
                                alt="Carlos S."
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-bold text-white">Carlos S.</p>
                                <p className="text-gray-400 text-sm">Cliente Frecuente</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonio 2 */}
                    <div className="bg-[#1e1511] border border-[#221510] rounded-xl p-6 shadow-md flex flex-col justify-between text-left">
                        <p className="text-gray-200 leading-relaxed mb-6">
                            "Siempre salgo sintiéndome renovado. La atención al detalle es impecable y los
                            productos que usan son de primera calidad."
                        </p>
                        <div className="flex items-center gap-4 mt-auto">
                            <img
                                src={perfil}
                                alt="Javier M."
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-bold text-white">Javier M.</p>
                                <p className="text-gray-400 text-sm">Cliente Satisfecho</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonio 3 */}
                    <div className="bg-[#1e1511] border border-[#221510] rounded-xl p-6 shadow-md flex flex-col justify-between text-left">
                        <p className="text-gray-200 leading-relaxed mb-6">
                            "Vine por recomendación y ahora no voy a otro lugar. El afeitado con toalla
                            caliente es una experiencia que todos deberían probar."
                        </p>
                        <div className="flex items-center gap-4 mt-auto">
                            <img
                                src={perfil}
                                alt="Luis G."
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-bold text-white">Luis G.</p>
                                <p className="text-gray-400 text-sm">Nuevo Fan</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
