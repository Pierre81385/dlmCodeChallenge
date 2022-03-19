import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import axios from "axios";

function Home() {
  const style = {
    ul: {
      listStyleType: "none",
      display: "inline-block",
      padding: 0,
      marginLeft: "auto",
      marginRight: "auto",
    },
    listCard: {
      width: "50vw",
      display: "flex",
      flexDirection: "row",
      margin: "10px",
    },
    Button: {
      minWidth: "20vw",
      marginLeft: "5px",
      marginRight: "auto",
      marginTop: "5px",
      marginBottom: "5px",
    },
    deleteButton: {
      marginLeft: "auto",
      marginRight: "5px",
      marginTop: "5px",
      marginBottom: "5px",
    },
  };

  //state declarations
  const [allDogs, setAllDogs] = useState([{}]);
  const [listChange, setListChange] = useState(false);
  const [query, setQuery] = useState("");
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  var searchList = allDogs.filter((dog) => dog.name === query);
  const navigate = useNavigate();

  //request all dogs on render, run again if listChange state is true.
  useEffect(() => {
    const params = new URLSearchParams([[key, value]]);

    console.log("Looking for dogs.");
    const fetchDogs = async () => {
      try {
        const res = await axios.get("/dogs", { params });
        setAllDogs([...res.data]);

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

    function ConfirmDelete() {
      return window.confirm(`Do you want to take ${dog.name} home?`);
    }

    <input type="button" onclick="ConfirmDelete()"></input>;

    return (
      <li key={dog._id}>
        <Card style={style.listCard}>
          <Button
            variant="outline-dark"
            style={style.Button}
            onClick={() => {
              navigate(`/dog/${dog._id}`);
            }}
          >
            {dog.name}
          </Button>

          <BsFillTrashFill
            style={style.deleteButton}
            onClick={() => {
              var result = ConfirmDelete();
              if (result) {
                deleteDog();
                setListChange(false);
              }
            }}
          />
        </Card>
      </li>
    );
  };

  return (
    <div>
      {allDogs.length === 0 ? (
        <>
          <h1>No Dogs Found!</h1>
          <Button
            style={{ margin: "5px" }}
            variant="outline-dark"
            onClick={() => {
              navigate("/new");
            }}
          >
            Add a Dog
          </Button>
        </>
      ) : (
        <>
          <div>
            <h1>Dogs Found</h1>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Button
                variant="outline-dark"
                style={{ margin: "5px" }}
                onClick={() => {
                  navigate("/new");
                }}
              >
                Add a Dog
              </Button>
              <DropdownButton
                id="dropdown-basic-button"
                variant="outline-dark"
                title="Sort by Gender"
                style={{ margin: "5px" }}
              >
                <Dropdown.Item
                  onClick={() => {
                    setKey("gender");
                    setValue("male");
                    setListChange(true);
                    console.log(`sort by ${key} and ${value}`);
                  }}
                >
                  Male
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setKey("gender");
                    setValue("female");
                    setListChange(true);
                    console.log(`sort by ${key} and ${value}`);
                  }}
                >
                  Female
                </Dropdown.Item>
              </DropdownButton>
            </div>
            <input
              placeholder="Search for your dog by name."
              style={{
                width: "50vw",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "5px",
                marginBottom: "5px",
              }}
              onChange={(event) => {
                setQuery(event.target.value);
                console.log(query);
              }}
            />
          </div>
          {searchList.length > 0 ? (
            <ul style={style.ul}>{searchList.map(renderDogList)}</ul>
          ) : (
            <ul style={style.ul}>{allDogs.map(renderDogList)}</ul>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
