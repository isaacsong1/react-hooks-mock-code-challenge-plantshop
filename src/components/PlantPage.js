import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const URL = "http://localhost:6001/plants";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch (URL)
    .then(resp=> resp.json())
    .then(setPlants)
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

  return (
    <main>
      <NewPlantForm handleChange={handleChange} />
      <Search handleSearch={handleSearch} />
      <PlantList plants={plants} searchQuery={searchQuery} />
    </main>
  );
}

export default PlantPage;
