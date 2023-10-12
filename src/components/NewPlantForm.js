import React, { useState } from "react";

function NewPlantForm({handleChange, newPrice, setNewPrice}) {
  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName && newImage && newPrice) {
      handleChange({
        name: newName,
        image: newImage,
        price: newPrice,
      })
      setNewName("")
      setNewImage("")
      setNewPrice("")
    } else {
      alert("Please fill out the entire form");
    }
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={newName} onChange={(e) => setNewName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" value={newImage} onChange={(e) => setNewImage(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
        <button type="submit">Add Plant</button>    
      </form>
    </div>
  );
}

export default NewPlantForm;
