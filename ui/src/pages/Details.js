import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

function Details() {
  const style = {
    detail: {
      display: "flex",
      flexDirection: "row",
    },
    formCard: {
      width: "50vw",
      padding: "5px",
      marginTop: "5px",
      marginLeft: "auto",
      marginRight: "auto",
    },
  };
  const { id: useParam } = useParams();
  const [dog, setDog] = useState({
    id: useParam,
    name: "",
    gender: "",
    age: "",
    weight: "",
    color: "",
    breed: "",
  });
  const [updateDog, setUpdateDog] = useState({
    name: "",
    gender: "",
    age: "",
    weight: "",
    color: "",
    breed: "",
  });
  const [errorFound, setErrorFound] = useState(false);
  const [editName, setEditName] = useState("none");
  const [editGender, setEditGender] = useState("none");
  const [editAge, setEditAge] = useState("none");
  const [editWeight, setEditWeight] = useState("none");
  const [editColor, setEditColor] = useState("none");
  const [editBreed, setEditBreed] = useState("none");

  useEffect(() => {
    const doggyDetails = async () => {
      try {
        const res = await fetch(`/dog/${useParam}`);
        const data = await res.json();
        console.log(data);
        setDog(data);
      } catch (error) {
        console.log(error);
        setErrorFound(true);
      }
    };
    doggyDetails();
  }, []);

  const handleChange = (event) => {
    setUpdateDog({ ...updateDog, [event.target.name]: event.target.value });
  };

  return (
    <div id="main">
      {!errorFound ? (
        <>
          <Card style={style.formCard} className="text-center">
            <form>
              <div style={style.detail}>
                <h3>{dog.name}</h3>
                <BsPencilSquare
                  onClick={() => {
                    setEditName("inline");
                  }}
                />
              </div>

              <div
                style={{
                  marginTop: "5px",
                  marginBottom: "2.5px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: `${editName}`,
                }}
              >
                <input
                  placeholder={dog.name}
                  name="name"
                  value={updateDog.name}
                  className="form-input col-12"
                  onChange={handleChange}
                  required
                ></input>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    setEditName("none");
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    setEditName("none");
                  }}
                >
                  Cancel
                </Button>
              </div>
              <div style={style.detail}>
                <h3>{dog.gender}</h3>
                <BsPencilSquare
                  onClick={() => {
                    setEditGender("inline");
                  }}
                />
              </div>
              <div
                style={{
                  marginTop: "5px",
                  marginBottom: "2.5px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: `${editGender}`,
                }}
              >
                <input
                  placeholder={dog.gender}
                  name="gender"
                  value={updateDog.gender}
                  className="form-input col-12"
                  onChange={handleChange}
                  required
                ></input>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    setEditGender("none");
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    setEditGender("none");
                  }}
                >
                  Cancel
                </Button>
              </div>
              <div style={style.detail}>
                <h3>{dog.age}</h3>
                <BsPencilSquare
                  onClick={() => {
                    setEditAge("inline");
                  }}
                />
              </div>
              <div
                style={{
                  marginTop: "5px",
                  marginBottom: "2.5px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: `${editAge}`,
                }}
              >
                <input
                  placeholder={dog.age}
                  name="age"
                  value={updateDog.age}
                  className="form-input col-12"
                  onChange={handleChange}
                  required
                ></input>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    setEditAge("none");
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    setEditAge("none");
                  }}
                >
                  Cancel
                </Button>
              </div>
              <div style={style.detail}>
                <h3>{dog.weight}</h3>
                <BsPencilSquare
                  onClick={() => {
                    setEditWeight("inline");
                  }}
                />
              </div>
              <div
                style={{
                  marginTop: "5px",
                  marginBottom: "2.5px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: `${editWeight}`,
                }}
              >
                <input
                  placeholder={dog.weight}
                  name="weight"
                  value={updateDog.weight}
                  className="form-input col-12"
                  onChange={handleChange}
                  required
                ></input>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    setEditWeight("none");
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    setEditWeight("none");
                  }}
                >
                  Cancel
                </Button>
              </div>
              <div style={style.detail}>
                <h3>{dog.color}</h3>
                <BsPencilSquare
                  onClick={() => {
                    setEditColor("inline");
                  }}
                />
              </div>
              <div
                style={{
                  marginTop: "5px",
                  marginBottom: "2.5px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: `${editColor}`,
                }}
              >
                <input
                  placeholder={dog.color}
                  name="color"
                  value={updateDog.color}
                  className="form-input col-12"
                  onChange={handleChange}
                  required
                ></input>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    setEditColor("none");
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    setEditColor("none");
                  }}
                >
                  Cancel
                </Button>
              </div>
              <div style={style.detail}>
                <h3>{dog.breed}</h3>
                <BsPencilSquare
                  onClick={() => {
                    setEditBreed("inline");
                  }}
                />
              </div>
              <div
                style={{
                  marginTop: "5px",
                  marginBottom: "2.5px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: `${editBreed}`,
                }}
              >
                <input
                  placeholder={dog.breed}
                  name="breed"
                  value={updateDog.breed}
                  className="form-input col-12"
                  onChange={handleChange}
                  required
                ></input>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    setEditBreed("none");
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    setEditBreed("none");
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Card>
        </>
      ) : (
        <>
          <h1>Yikes!</h1>
          <h3>Something went wrong. Check out the console for more details.</h3>
        </>
      )}

      <Link to={`/`}>BACK</Link>
    </div>
  );
}

export default Details;
