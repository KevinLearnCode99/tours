import Tour from "./Tour";

function Tours({ tours, removeTour }) {
  return (
    <div>
      {tours.map((tour) => {
        return (
          <div className="wrapper" key={tour.id}>
            <Tour tour={tour} removeTour={removeTour} />
          </div>
        );
      })}
    </div>
  );
}
export default Tours;
