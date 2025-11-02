import React, { useState } from 'react'
import servicesJson from "../data/services.json";

export const BookAppointment = () => {

    const [data, setData] = useState({
        name: '',
        services: '',
        date: '',
        time: ''
    });

    const handleChange = (e) => {
        e.preventDefault();
        const dataform = e.target.value;
        setData({
            ...data,
            [e.target.name]: dataform
        });
        //console.log(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construimos el mensaje
        const message = `Hola, soy ${data.name}. 
Me gustaría solicitar el servicio de *${data.services}* 
para la fecha *${data.date}* a las *${data.time}*.`

        // Número de WhatsApp (formato internacional, sin + ni espacios)
        const phone = "573134702824";

        // Detectar si el usuario está en un dispositivo móvil
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        // Según el dispositivo, usar el enlace correcto
        const baseUrl = isMobile
            ? "https://wa.me" // abrirá la app móvil
            : "https://web.whatsapp.com/send"; // abrirá WhatsApp Web

        // Construir la URL final
        const url = `${baseUrl}?phone=${phone}&text=${encodeURIComponent(message)}`;

        // Abrir WhatsApp (en nueva pestaña)
        window.open(url, '_blank');

        // Limpiar los datos del formulario
        setData({
            name: '',
            services: '',
            date: '',
            time: ''
        });


        setData({
            name: '',
            services: '',
            date: '',
            time: ''
        });

        Array.from(e.target.elements).forEach((el) => {
            if (el.tagName === 'INPUT' || el.tagName === 'SELECT' || el.tagName === 'TEXTAREA') {
                el.value = '';
            }
        });
    }

    const getColombiaDate = () => {
        const now = new Date();
        // Ajusta manualmente los 5 horas de diferencia con UTC
        const offsetMs = 5 * 60 * 60 * 1000;
        const colombiaTime = new Date(now.getTime() - offsetMs);
        return colombiaTime.toISOString().split("T")[0];
    };


    return (
        <div className="px-6 sm:px-8 md:px-0"> {/* margen lateral para evitar que se pegue al borde */}
            <section className="py-16 sm:py-20">
                <h1 className="font-bold text-center text-3xl sm:text-4xl mb-3">
                    Reserva tu cita
                </h1>
                <p className="text-center text-gray-400 text-sm">
                    Rápido, fácil y a tu medida.
                </p>
            </section>

            <div className="w-full max-w-md mx-auto p-5 sm:p-6 border border-[#2C1A14] rounded-xl bg-[#2C1A14] shadow-lg relative overflow-hidden">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre Completo"
                        required
                        onChange={handleChange}
                        className="w-full border border-gray-700 rounded-md p-2 bg-[#221510] text-white placeholder-gray-400 focus:outline-none focus:border-[#D44211] transition"
                    />

                    <div className="relative">
                        <select
                            name="services"
                            required
                            onChange={handleChange}
                            className="w-full border border-gray-700 rounded-md p-2 bg-[#221510] text-white focus:outline-none focus:border-[#D44211] transition appearance-none"
                        >
                            <option value="">Selecciona un servicio</option>
                            {servicesJson.map((categoria) => (
                                <option key={categoria.id} value={categoria.categoria}>
                                    {categoria.categoria}
                                </option>
                            ))}
                        </select>
                        {/* Flecha personalizada opcional */}
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                            ▼
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 w-full">
                        <input
                            type="date"
                            name="date"
                            required
                            min={getColombiaDate()}
                            onChange={handleChange}
                            className="flex-1 border border-gray-700 rounded-md p-2 bg-[#221510] text-white focus:outline-none focus:border-[#D44211] transition"
                        />
                        <input
                            type="time"
                            name="time"
                            min="09:00"
                            max="19:59"
                            required
                            onChange={handleChange}
                            className="flex-1 border border-gray-700 rounded-md p-2 bg-[#221510] text-white focus:outline-none focus:border-[#D44211] transition"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-[#D44211] text-white font-semibold py-2 rounded-md hover:bg-[#b7370e] transition-colors"
                    >
                        Confirmar Reserva
                    </button>
                </form>
            </div>
        </div>

    )
}
