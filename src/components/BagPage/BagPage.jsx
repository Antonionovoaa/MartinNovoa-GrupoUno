import React from 'react';
import useBag from "../store/useBag"; // Asegúrate de que la ruta del archivo sea correcta
import './bag.css';

const BagPage = () => {
    const cart = useBag(state => state.cart);
    const total = useBag(state => state.total);
    const removeFromCart = useBag(state => state.removeFromCart);
    const clearCart = useBag(state => state.clearCart);

    return (
        <div className="bag">
            <div className="cart-container">
                {cart.length === 0 ? (
                    <p>Tu carrito está vacío</p>
                ) : (
                    <ul>
                        {cart.map(item => (
                            <li key={item.id} className="cart-item">
                                <img src={item.img} alt={item.name} className="cart-item-img" />
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p>Precio: ${item.price}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                    <div className="clear-button">
                                        <button onClick={() => removeFromCart(item)}>Eliminar</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                {cart.length > 0 && (
                    <div className="cart-total">
                        <h3>Total: ${total}</h3>
                        <div className="clear-button">
                            <button onClick={clearCart}>Vaciar Carrito</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BagPage;
