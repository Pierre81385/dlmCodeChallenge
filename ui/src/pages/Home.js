import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Home() {
  //state
  const [allDogs, setAllDogs] = useState([{}]);
  const [listChange, setListChange] = useState(false);

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

    if (listChange) {
      fetchDogs();
    }
  }, [listChange]);

  const renderDogList = (dog) => {
    const deleteDog = async () => {
      try {
        const res = await fetch(`/dog/${dog._id}`, {
          mode: "cors",
          method: "DELETE",
        });
        if (!res.ok) throw new Error(res.statusText);
        const deleteResponse = await res.json();
        setListChange(true);
        return deleteResponse;
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <li key={dog._id}>
        <Link to={`/dog/${dog._id}`}>{dog.name}</Link>

        <Button
          onClick={() => {
            deleteDog();
          }}
        >
          Delete
        </Button>
      </li>
    );
  };
  return (
    <div>
      <div>Meet the dogs:</div>
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
