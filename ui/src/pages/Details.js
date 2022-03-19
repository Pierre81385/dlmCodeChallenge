import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Details() {
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
  const [errorFound, setErrorFound] = useState(false);

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

  return (
    <div id="main">
      {!errorFound ? (
        <>
          <h3>{dog.name}</h3>
          <h3>{dog.gender}</h3>
          <h3>{dog.age}</h3>
          <h3>{dog.weight}</h3>
          <h3>{dog.color}</h3>
          <h3>{dog.breed}</h3>
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
