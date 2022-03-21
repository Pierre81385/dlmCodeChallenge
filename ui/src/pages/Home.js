import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

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
  const [allDogs, setAllDogs] = useState([
    { name: "", gender: "", age: "", size: "", color: "", breed: "" },
  ]);
  const [listChange, setListChange] = useState(false);
  const [query, setQuery] = useState("");
  var searchList = allDogs.filter(
    (dog) => dog.name.toLocaleLowerCase() === query.toLocaleLowerCase()
  );
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [displayList, setDisplayList] = useState("inline");
  const [clearFilter, setClearFilter] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const numberOfButtons = allDogs.length / pageSize;
  console.log(Math.round(numberOfButtons));
  const [pageButtons, setPageButtons] = useState([]);
  const [changeButtons, setChangeButtons] = useState(false);
  const navigate = useNavigate();

  const allDogsPaged = (array, pageSize, pageNumber) => {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  };

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
    setListChange(false);

    //listChange initilized as false, changes to true if deleteDog sucessfully deletes a dog
    if (listChange) {
      fetchDogs();
    }
  }, [listChange]);

  useEffect(() => {
    console.log("number of buttons: " + numberOfButtons);
    console.log("page buttons: " + pageButtons.length);
    const getButtons = () => {
      if (pageButtons.length < numberOfButtons)
        for (var i = 0; i < numberOfButtons + 1; i++) {
          if (i === 0) {
            console.log("waiting for buttons");
          } else if (pageButtons.includes(i)) {
            console.log("still waiting for buttons");
          } else {
            pageButtons.push(i);
            console.log(pageButtons);
          }
        }
    };
    getButtons();

    if (listChange) {
      getButtons();
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

  ///////////////////////////////////////////////////////
  const renderPageButtons = (number) => {
    console.log("rendered: " + pageButtons);
    return (
      <Dropdown.Item
        onClick={() => {
          setCurrentPage(number);
          setListChange(true);
        }}
      >
        ${number}
      </Dropdown.Item>
    );
  };
  //////////////////////////////////////////////////////////////

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
            <h1>The Dog Found</h1>
            <h4>Lost your dog? Check the list to see dogs we've rescued.</h4>

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
                style={{ margin: "5px", display: `${displayList}` }}
              >
                <Dropdown.Item
                  onClick={() => {
                    setKey("gender");
                    setValue("male");
                    setListChange(true);
                    setDisplayList("none");
                    setClearFilter("inline");
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
                    setDisplayList("none");
                    setClearFilter("inline");
                    console.log(`sort by ${key} and ${value}`);
                  }}
                >
                  Female
                </Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                id="dropdown-basic-button"
                variant="outline-dark"
                title="Sort by Size"
                style={{ margin: "5px", display: `${displayList}` }}
              >
                <Dropdown.Item
                  onClick={() => {
                    setKey("size");
                    setValue("small");
                    setListChange(true);
                    setDisplayList("none");
                    setClearFilter("inline");
                    console.log(`sort by ${key} and ${value}`);
                  }}
                >
                  Small Dogs
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setKey("size");
                    setValue("medium");
                    setListChange(true);
                    setDisplayList("none");
                    setClearFilter("inline");
                    console.log(`sort by ${key} and ${value}`);
                  }}
                >
                  Medium Dogs
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setKey("size");
                    setValue("large");
                    setListChange(true);
                    setDisplayList("none");
                    setClearFilter("inline");
                    console.log(`sort by ${key} and ${value}`);
                  }}
                >
                  Large Dogs
                </Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                id="dropdown-basic-button"
                variant="outline-dark"
                title="Sort by Age"
                style={{ margin: "5px", display: `${displayList}` }}
              >
                <Dropdown.Item
                  onClick={() => {
                    setKey("age");
                    setValue("puppy");
                    setListChange(true);
                    setDisplayList("none");
                    setClearFilter("inline");
                    console.log(`sort by ${key} and ${value}`);
                  }}
                >
                  Puppy
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setKey("age");
                    setValue("adult");
                    setListChange(true);
                    setDisplayList("none");
                    setClearFilter("inline");
                    console.log(`sort by ${key} and ${value}`);
                  }}
                >
                  Adult
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setKey("age");
                    setValue("senior");
                    setListChange(true);
                    setDisplayList("none");
                    setClearFilter("inline");
                    console.log(`sort by ${key} and ${value}`);
                  }}
                >
                  Senior
                </Dropdown.Item>
              </DropdownButton>
              <Button
                variant="dark"
                style={{ display: `${clearFilter}` }}
                onClick={() => {
                  console.log("list change onClick is " + listChange);
                  setKey("");
                  setQuery("");
                  setListChange(true);
                  setDisplayList("inline");
                  setClearFilter("none");
                }}
              >
                Clear Filter
              </Button>
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <DropdownButton
              id="dropdown-basic-button"
              variant="outline-dark"
              title="Number of Results"
              style={{ margin: "5px" }}
            >
              <Dropdown.Item
                onClick={() => {
                  setPageSize(3);
                  setPageButtons([]);
                  setListChange(true);
                }}
              >
                3
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setPageSize(10);
                  setPageButtons([]);
                  setListChange(true);
                }}
              >
                10 (default)
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setPageSize(allDogs.length);
                  setPageButtons([]);
                  setListChange(true);
                }}
              >
                ALL
              </Dropdown.Item>
            </DropdownButton>
            <DropdownButton
              id="dropdown-basic-button"
              variant="outline-dark"
              title="Select Page"
              style={{ margin: "5px" }}
            >
              {pageButtons.map(renderPageButtons)}
            </DropdownButton>
          </div>
          {searchList.length > 0 ? (
            <ul style={style.ul}>{searchList.map(renderDogList)}</ul>
          ) : (
            <ul style={style.ul}>
              {allDogsPaged(allDogs, pageSize, currentPage).map(renderDogList)}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
