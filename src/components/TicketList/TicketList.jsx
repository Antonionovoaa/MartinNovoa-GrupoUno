import React from 'react';

const TicketList = ({ tickets }) => {
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Solicitudes de Soporte</h2>
            {tickets.length === 0 ? (
                <p className="text-center text-gray-600">No hay solicitudes de soporte.</p>
            ) : (
                <ul className="space-y-4">
                    {tickets.map((ticket, index) => (
                        <li key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">{ticket.name}</h3>
                            <p className="text-gray-700"><strong>Email:</strong> {ticket.email}</p>
                            <p className="text-gray-700"><strong>Mensaje:</strong> {ticket.message}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TicketList;
