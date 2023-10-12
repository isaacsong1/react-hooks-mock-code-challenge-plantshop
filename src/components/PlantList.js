import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, searchQuery}) {
  // const filterPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchQuery))
  const mappedPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchQuery)).map(plant => <PlantCard key={plant.id} {...plant} />)

  return (
    <ul className="cards">{mappedPlants}</ul>
  );
}

export default PlantList;
