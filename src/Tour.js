import { useState } from "react";

function Tour({ tour, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="tour">
      <img src={tour.image} alt={tour.name} />
      <div className="body">
        <div className="brief-info">
          <p className="bold ">{tour.name}</p>
          <p className="bold price">${tour.price}</p>
        </div>

        {readMore ? (
          <p>
            {tour.info}{" "}
            <button
              onClick={() => {
                setReadMore(!readMore);
              }}
              className="read-more-less-btn"
            >
              Show less
            </button>
          </p>
        ) : (
          <p>
            {tour.info.substring(0, 220) + "..."}{" "}
            <button
              onClick={() => {
                setReadMore(!readMore);
              }}
              className="read-more-less-btn"
            >
              Read more
            </button>
          </p>
        )}

        <button
          className="not-interested-btn"
          onClick={() => {
            removeTour(tour.id);
          }}
        >
          Not interested
        </button>
      </div>
    </div>
  );
}
export default Tour;
