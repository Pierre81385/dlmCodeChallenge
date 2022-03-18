// LIST FILTERS (optional)

// SEARCH bar

// NEW entity button (CREATE)
//- [ ] A POST request to `/entity` creates a new entity

// LIST of documents/entries (READ) {{{ DONE }}}

// - EDIT button (UPDATE)
//- [ ] A GET request to `/entity/:id` returns the given entity, or a 404 status code if that entity does not exist.

// - DELETE button (DELETE) {{{ DONE }}}
// - [ ] A DELETE request to `/entity/:id` deletes the given entity, or a 404 status code if that entity does not exist.
// - [ ] A 200 status code, with a message of 'ok' or something similar is returned upon successful deletion.

import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Home() {
  //state declarations
  const [allDogs, setAllDogs] = useState([{}]);
  const [listChange, setListChange] = useState(false);

  //request all dogs on render, run again if listChange state is true.
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

    //listChange initilized as false, changes to true if deleteDog sucessfully deletes a dog
    if (listChange) {
      fetchDogs();
    }
  }, [listChange]);

  //render list items of each dog stored in the allDogs state
  const renderDogList = (dog) => {
    //send DELETE request by "_id"
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
            setListChange(false);
          }}
        >
          Delete
        </Button>
      </li>
    );
  };

  return (
    <div>
      {allDogs.length === 0 ? (
        <>
          <h1>No dogs!</h1>
        </>
      ) : (
        <>
          <div>Meet the dogs:</div>
          <ul>{allDogs.map(renderDogList)}</ul>
        </>
      )}
    </div>
  );
}

export default Home;
