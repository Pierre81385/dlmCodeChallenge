import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function New() {
  const [newDog, setNewDog] = useState({
    name: "",
    age: "",
    weight: "",
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
      weight: "",
      color: "",
      breed: "",
    });

    navigate("/");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        placeholder="name"
        name="name"
        value={newDog.name}
        className="form-input"
        onChange={handleChange}
      ></input>
      <input
        placeholder="age"
        name="age"
        value={newDog.age}
        className="form-input"
        onChange={handleChange}
      ></input>
      <input
        placeholder="weight"
        name="weight"
        value={newDog.weight}
        className="form-input"
        onChange={handleChange}
      ></input>
      <input
        placeholder="color"
        name="color"
        value={newDog.color}
        className="form-input"
        onChange={handleChange}
      ></input>
      <input
        placeholder="breed"
        name="breed"
        value={newDog.breed}
        className="form-input"
        onChange={handleChange}
      ></input>
      <Button type="submit">Submit</Button>
      <Link className="btn" to={`/`}>
        Cancel
      </Link>
    </form>
  );
}

export default New;
