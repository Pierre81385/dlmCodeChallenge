import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
    img: {
      width: "20vw",
    },
  };
  const { id: useParam } = useParams();
  const [dog, setDog] = useState({
    id: useParam,
    name: "",
    gender: "",
    age: "",
    size: "",
    color: "",
    breed: "",
  });
  const [updateDog, setUpdateDog] = useState({});
  const [errorFound, setErrorFound] = useState(false);
  const [editName, setEditName] = useState("none");
  const [editGender, setEditGender] = useState("none");
  const [editAge, setEditAge] = useState("none");
  const [editsize, setEditsize] = useState("none");
  const [editColor, setEditColor] = useState("none");
  const [editBreed, setEditBreed] = useState("none");
  const [submitButtonDisplay, setSubmitButtonDisplay] = useState("none");
  const navigate = useNavigate();

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
    setSubmitButtonDisplay("inline");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const updateDogDetails = async () => {
      const res = await fetch(`/dog/${useParam}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateDog),
      });
      const data = await res.json();
      console.log(data);
    };
    updateDogDetails();

    setUpdateDog({});

    navigate("/");
  };

  return (
    <div id="main">
      {!errorFound ? (
        <>
          <Card style={style.formCard} className="text-center">
            <form onSubmit={handleFormSubmit}>
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
                  placeholder="name"
                  name="name"
                  value={updateDog.name}
                  className="form-input col-12"
                  onChange={handleChange}
                ></input>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    setEditName("none");
                  }}
                >
                  Done
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
                  placeholder="gender"
                  name="gender"
                  value={updateDog.gender}
                  className="form-input col-12"
                  onChange={handleChange}
                ></input>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    setEditGender("none");
                  }}
                >
                  Done
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
                  placeholder="age"
                  name="age"
                  value={updateDog.age}
                  className="form-input col-12"
                  onChange={handleChange}
                ></input>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    setEditAge("none");
                  }}
                >
                  Done
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
                <h3>{dog.size}</h3>
                <BsPencilSquare
                  onClick={() => {
                    setEditsize("inline");
                  }}
                />
              </div>
              <div
                style={{
                  marginTop: "5px",
                  marginBottom: "2.5px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: `${editsize}`,
                }}
              >
                <input
                  placeholder="size"
                  name="size"
                  value={updateDog.size}
                  className="form-input col-12"
                  onChange={handleChange}
                ></input>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    setEditsize("none");
                  }}
                >
                  Done
                </Button>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    setEditsize("none");
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
                  placeholder="color"
                  name="color"
                  value={updateDog.color}
                  className="form-input col-12"
                  onChange={handleChange}
                ></input>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    setEditColor("none");
                  }}
                >
                  Done
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
                  placeholder="breed"
                  name="breed"
                  value={updateDog.breed}
                  className="form-input col-12"
                  onChange={handleChange}
                ></input>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    setEditBreed("none");
                  }}
                >
                  Done
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
              <Button
                variant="outline-dark"
                style={{ display: `${submitButtonDisplay}` }}
                type="submit"
              >
                Submit Updates
              </Button>
            </form>
            <div>
              <img
                style={style.img}
                src="https://www.pikpng.com/pngl/m/4-44135_dog-paw-prints-cat-paw-print-clipart-cat.png"
                alt="Dog Paw Prints Cat Paw Print Clipart - Cat Paw Print Transparent - Png Download@pikpng.com"
              />
            </div>
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
