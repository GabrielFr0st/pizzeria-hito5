import React from "react";

const PizzaCard = ({ pizza }) => {
  return (
    <div className="card">
      <img src={pizza.img} alt={pizza.name} />
      <h3 className="card-title">{pizza.name}</h3>
      <p className="card-text">
        <strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}
      </p>
      <p className="card-text">
        <strong>Precio:</strong> ${pizza.price}
      </p>
      <button className="btn btn-primary">Añadir al carrito</button>
    </div>
  );
};

export default PizzaCard;
