import React, { useState, useMemo } from 'react';
import { pizzaCart } from './pizzas';

const Cart = () => {
    const [cart, setCart] = useState(Array.isArray(pizzaCart) ? pizzaCart : []);

    const increaseQuantity = (index) => {
        setCart((prevCart) => {
            const newCart = [...prevCart];
            newCart[index].quantity += 1;
            return newCart;
        });
    };

    const decreaseQuantity = (index) => {
        setCart((prevCart) => {
            const newCart = [...prevCart];
            if (newCart[index].quantity > 1) {
                newCart[index].quantity -= 1;
            } else {
                newCart.splice(index, 1);
            }
            return newCart;
        });
    };

    const total = useMemo(() => {
        if (!Array.isArray(cart)) return 0;
        return cart.reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0);
    }, [cart]);

    return (
        <div className="cart-container">
            {cart.map(({ image, name, price, quantity }, index) => (
                <div key={index} className="cart-item">
                    <img src={image} alt={name} />
                    <h3>{name}</h3>
                    <p>Precio: ${price}</p>
                    <p>Cantidad: {quantity}</p>
                    <button onClick={() => increaseQuantity(index)}>+</button>
                    <button onClick={() => decreaseQuantity(index)}>-</button>
                </div>
            ))}
            <p>Total: ${total}</p>
            <button>Pagar</button>
        </div>
    );
};

export default Cart;
