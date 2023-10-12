import React, { useState } from "react";

function PlantCard({plant, handleEdit}) {
  const [stock, setStock] = useState(true);
  const [editPrice, setEditPrice] = useState(plant.price);

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {stock ? (
        <button className="primary" onClick={() => setStock(!stock)} >In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <button className="primary" onClick={() => handleEdit(plant, editPrice)} >Edit Price</button>
      {plant.edit ? <input type="number" name="price" value={editPrice} onChange={(e) => setEditPrice(e.target.value)} /> : null}
    </li>
  );
}

export default PlantCard;
