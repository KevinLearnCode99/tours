import { useEffect, useState } from "react";
import Tours from "./Tours";
import "./styles.css";
function App() {
  const [loading, isLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const FetchData = async () => {
    const url = "https://course-api.com/react-tours-project";
    try {
      const response = await fetch(url);
      const tours = await response.json();
      isLoading(false);
      setTours(tours);
    } catch (error) {
      isLoading(false);
      console.log(error);
    }
  };
  const removeTour = (id) => {
    console.log(id);
    const newArr = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newArr);
  };

  useEffect(() => {
    FetchData();
  }, []);
  if (loading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  } else {
    return (
      <>
        {tours.length !== 0 ? (
          <h1 className="welcome"> Welcome to our tours</h1>
        ) : (
          <>
            <h1 className="welcome">No Tours Left</h1>
            <button className="refresh-btn" onClick={() => FetchData()}>
              Reset
            </button>
          </>
        )}

        <Tours tours={tours} removeTour={removeTour} />
      </>
    );
  }
}

export default App;
