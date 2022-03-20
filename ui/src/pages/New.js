import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function New() {
  const style = {
    formCard: {
      width: "50vw",
      padding: "5px",
      marginTop: "5px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    input: {
      marginTop: "5px",
      marginBottom: "2.5px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    Button: {
      marginLeft: "5px",
      marginRight: "5px",
      marginTop: "5px",
      marginBottom: "5px",
    },
  };
  const [newDog, setNewDog] = useState({
    name: "",
    gender: "",
    age: "",
    size: "",
    color: "",
    breed: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setNewDog({ ...newDog, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const recordNewDog = async () => {
      const res = await fetch("/dogs", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDog),
      });
      const data = await res.json();
      console.log(data);
    };
    recordNewDog();

    setNewDog({
      name: "",
      age: "",
      size: "",
      color: "",
      breed: "",
    });

    navigate("/");
  };

  return (
    <Card style={style.formCard} className="text-center">
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="name"
          name="name"
          value={newDog.name}
          className="form-input col-12"
          style={style.input}
          onChange={handleChange}
          required
        ></input>
        <select
          id="genderSelect"
          className="form-control"
          onChange={() => {
            setNewDog({
              ...newDog,
              gender: document.getElementById("genderSelect").value,
            });
          }}
          required
        >
          <option value="" selected disabled>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select
          id="ageSelect"
          className="form-control"
          onChange={() => {
            setNewDog({
              ...newDog,
              age: document.getElementById("ageSelect").value,
            });
          }}
          required
        >
          <option value="" selected disabled>
            Select Age
          </option>
          <option value="puppy">Puppy</option>
          <option value="adult">Adult</option>
          <option value="senior">Senior</option>
        </select>
        <select
          id="sizeSelect"
          className="form-control"
          onChange={() => {
            setNewDog({
              ...newDog,
              size: document.getElementById("sizeSelect").value,
            });
          }}
          required
        >
          <option value="" selected disabled>
            Select Size
          </option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Senior</option>
        </select>

        <input
          placeholder="color"
          name="color"
          value={newDog.color}
          className="form-input col-12"
          style={style.input}
          onChange={handleChange}
          required
        ></input>
        <input
          placeholder="breed"
          name="breed"
          value={newDog.breed}
          className="form-input col-12"
          style={style.input}
          onChange={handleChange}
          required
        ></input>
        <Button variant="outline-dark" style={style.Button} type="submit">
          Submit
        </Button>
        <Button
          variant="outline-dark"
          className="btn"
          style={style.Button}
          onClick={() => {
            navigate(`/`);
          }}
        >
          Cancel
        </Button>
      </form>
    </Card>
  );
}

export default New;
