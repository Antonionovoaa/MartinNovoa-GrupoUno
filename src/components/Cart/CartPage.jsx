import React from 'react';
import useBag from '../../store/useBag'; // Verifica que esta ruta sea correcta
import './cart.css';

const CartPage = () => {
    const cart = useBag(state => state.cart);
    const total = useBag(state => state.total);
    const removeFromCart = useBag(state => state.removeFromCart);
    const clearCart = useBag(state => state.clearCart);

    return (
        <div className="cart text-center">
            <h1>Tu carro de compras</h1>
            {/*<div className="col-md-3 cart-container">(centra las tarjetas de carrito)*/}
            <div className="col-auto">
                {cart.length === 0 ? (
                    /*Texto "tu carrito está vacío (hover:bg-blue-700 es un boton)"*/
                    <p className="bg-blue-500  text-white font-bold py-2 px-4 rounded">Tu carrito está vacío</p>
                ) : (
                    <ul>
                        {cart.map(item => (
                            <li key={item.id} className="cart-item">
                                <img src={item.img} alt={item.name} className="cart-item-img h-3/4 md:w-48" />
                                <div className="cart-item-details">
                                    <h1 className="m-2 px-1">{item.name}</h1>
                                    <p className="m-2 px-1">Precio: ${item.price}</p>
                                    <p className="m-2 px-1">Cantidad: {item.quantity}</p>
                                    <button onClick={() => removeFromCart(item)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 m-2 rounded">Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                {cart.length > 0 && (
                    <div className="cart-total">
                        <h3 className="py-2 px-3">Total: ${total}</h3>
                        <button onClick={clearCart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Vaciar Carrito</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CartPage;
