import React from "react";
import "../styles/Main.css";

function Main(props) {
  console.log(props.list);
  return (
    <div className="cnt">
      {props.list.map((data) => (
        <div className="container mt-4">
          <div className="card">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={data.image_url}
                  alt="Hotel Image"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8 ig">
                <div className="card-body">
                  <div className="rating">
                    {/* Rating in the top right corner */}
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                  </div>
                  <h5 className="card-title">Hotel Name: {data.place_name}</h5>
                  <p className="card-text">Location : {data.location}</p>
                  <p className="card-text"> Review: {data.review}</p>
                  <p className="card-text">Category: {data.category_type}</p>
                  <p className="card-text">
                    <strong>Price: {data.amount}</strong>
                  </p>
                  <button className="btn btn-primary float-end">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
