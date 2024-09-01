import React, { useState, useEffect } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((response) => response.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error("Error fetching pizza:", error));
  }, []);

  if (!pizza) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pizza-details">
      <img src={pizza.img} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <p>{pizza.desc}</p>
      <p><strong>Precio:</strong> ${pizza.price}</p>
      <p><strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}</p>
      <button className="btn btn-primary">Añadir al carrito</button>
    </div>
  );
};


const pizzaCart = () => {
  return (
    <div>
      <h3>Carrito de Pizzas</h3>
      <p>Aquí puedes ver las pizzas que has añadido a tu carrito.</p>
    </div>
  );
};


export { pizzaCart };
export default Pizza; 