import React from "react";
import servicesJson from "../data/services.json";

export const Services = () => {

    return (
        <section className='py-12 px-6'>

            <h1 className='text-3xl font-extrabold mb-2 text-center'>Nuestros Servicios</h1>
            <p className="text-gray-300 mb-8 text-center">Descubre la gama de servicios que ofrecemos para mantenerte con un look impecable.</p>

            <div className="max-w-4xl mx-auto space-y-10 sm:px-6 lg:px-8">
                {
                    servicesJson.map((categoria) => (
                        <div key={categoria.id} className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <h3 className="text-2xl font-semibold mb-4 border-b border-[#D44211] pb-4 sm:p-6">
                                    {categoria.categoria}
                                </h3>

                                {/* Mobile: stacked cards for better readability */}
                                <div className="md:hidden space-y-4 px-2 pb-4">
                                    {categoria.servicios.map((servicio) => (
                                        <div key={servicio.id} className="overflow-hidden rounded-lg border border-gray-700 p-3">
                                            <div className="flex items-start justify-between">
                                                <div className="pr-4">
                                                    <div className="font-medium text-base">{servicio.nombre}</div>
                                                    <div className="text-gray-300 text-sm mt-1">{servicio.descripcion}</div>
                                                </div>
                                                <div className="text-[#D44211] font-semibold text-right ml-4">${servicio.precio}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Desktop / md+: table view */}
                                <table className="hidden md:table w-full min-w-[300px] text-sm sm:text-base border-collapse">
                                    <tbody>
                                        {
                                            categoria.servicios.map((servicio) => (
                                                <tr
                                                    key={servicio.id}
                                                    className="border-b border-gray-700"
                                                >
                                                    <td className="py-2 px-2 sm:py-3 sm:px-3 font-medium">
                                                        {servicio.nombre}
                                                    </td>
                                                    <td className="py-2 px-2 sm:py-3 sm:px-3 text-gray-300">
                                                        {servicio.descripcion}
                                                    </td>
                                                    <td className="py-2 px-2 sm:py-3 sm:px-3 text-right font-semibold text-[#D44211]">
                                                        ${" "}
                                                        <span className="text-sm sm:text-base">{servicio.precio}</span>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};
