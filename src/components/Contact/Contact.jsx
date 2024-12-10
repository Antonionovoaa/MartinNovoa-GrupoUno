export default function ContactPage(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"><h2
                className="text-2xl font-bold mb-6 text-center">Contacto</h2>
                <form>
                    <div className="mb-4"><label className="block text-gray-700 text-sm font-bold mb-2"
                                                 htmlFor="name"> Nombre </label> <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name" type="text" placeholder="Tu nombre"/></div>
                    <div className="mb-4"><label className="block text-gray-700 text-sm font-bold mb-2"
                                                 htmlFor="email"> Correo Electrónico </label> <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="email" placeholder="entrebrujo@example.com"/></div>
                    <div className="mb-4"><label className="block text-gray-700 text-sm font-bold mb-2"
                                                 htmlFor="message"> Mensaje </label> <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message" rows="4" placeholder="Tu mensaje"></textarea></div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"> Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}