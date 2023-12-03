import "../styles/SearchConatiner.css";
import la from "../assests/location-dot-solid.svg";
import mo from "../assests/money-check-solid.svg";
import to from "../assests/clock-regular.svg";

function SearchConatiner() {
  return (
    <div className="container text-center px-5">
      <h3>Tours in London</h3>
      <div className="row align-items-start">
        <div className="col-md-2">
          <img src={la} alt="retry" />
          <div>
            <span>Location</span>
            <br />
            <span>Where are you going?</span>
          </div>
        </div>
        <div className="col-md-4">
          <img src={mo} alt="retry" />
          <div>
            <span>Check in - Check out</span>
          </div>
        </div>
        <div className="col-md-3">
          <img src={to} alt="retry" />
          <div>
            <span>Tour Type</span>
          </div>
        </div>
        <div className="col-md-1">
          <button className="btn btn-dark btn-lg">Search</button>
        </div>
      </div>
    </div>
  );
}

export default SearchConatiner;
