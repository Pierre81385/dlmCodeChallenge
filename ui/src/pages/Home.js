import React, { useEffect, useState } from "react";

function Home() {
  const [allDogs, setAllDogs] = useState([{}]);

  useEffect(() => {
    console.log("Looking for dogs.");
    const fetchDogs = async () => {
      try {
        const res = await fetch("/dogs");
        const data = await res.json();
        setAllDogs([...data]);
        console.log("Found some dogs!");
      } catch (error) {
        console.log(error);
      }
    };
    fetchDogs();
    console.log(allDogs);
  }, []);

  const renderDogList = (dog) => {
    return (
      <li>
        <h3>Meet {dog.name}</h3>
      </li>
    );
  };
  return (
    <div>
      <ul>{allDogs.map(renderDogList)}</ul>
    </div>
  );
}

export default Home;

// LIST FILTERS (optional)

// SEARCH bar

// NEW entity button (CREATE)
//- [ ] A POST request to `/entity` creates a new entity

// LIST of documents/entries (READ)

// - EDIT button (UPDATE)
//- [ ] A GET request to `/entity/:id` returns the given entity, or a 404 status code if that entity does not exist.

// - DELETE button (DELETE)
// - [ ] A DELETE request to `/entity/:id` deletes the given entity, or a 404 status code if that entity does not exist.
// - [ ] A 200 status code, with a message of 'ok' or something similar is returned upon successful deletion.
