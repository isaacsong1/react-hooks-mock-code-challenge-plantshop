import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const URL = "http://localhost:6001/plants";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [newPrice, setNewPrice] = useState("");

  useEffect(() => {
    fetch (URL)
    .then(resp=> resp.json())
    .then(plantsArr => setPlants(plantsArr.map(plant => ({...plant, edit: false}))))
    .catch(err => alert(err));
  }, [])

  const handleChange = (plantToAdd) => {
    // setPlants(currPlants => [...currPlants, plantToAdd])
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(plantToAdd)
    })
    .then(resp => resp.json())
    .then(newPlant => setPlants(currPlants => [...currPlants, newPlant]))
    .catch(err => alert(err));
  }

  const handleSearch = (search) => {
    setSearchQuery(search)
  }

  const handleEdit = (plantObj, editPrice) => {
    // setPlants(currPlants => currPlants.map(plant => plant.id === plantObj.id ? ({...plant, edit: true}) : plant))
    fetch(`${URL}/${plantObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(plantObj)
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  return (
    <main>
      <NewPlantForm handleChange={handleChange} newPrice={newPrice} setNewPrice={setNewPrice} />
      <Search handleSearch={handleSearch} />
      <PlantList plants={plants} searchQuery={searchQuery} handleEdit={handleEdit} />
    </main>
  );
}

export default PlantPage;
