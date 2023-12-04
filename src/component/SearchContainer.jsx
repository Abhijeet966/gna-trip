import "../styles/SearchConatiner.css";
import la from "../assests/location-dot-solid.svg";
import mo from "../assests/money-check-solid.svg";
import to from "../assests/clock-regular.svg";

function SearchConatiner() {
  return (
    <div className="pontainer_Search">
      <h3>Tours in London</h3>
      <div className="search-container-wrapper">
        <div className="Search-Child1">
          <div className="Child1_SubChild">
            <img src={la} alt="retry" />
            <div>
              <span>Location</span>
              <br />
              <small>Where are you going?</small>
            </div>
          </div>
          <div className="Search_Child2">
            <img src={mo} alt="retry" />
            <div>
              <span>Check in - Check out</span>
              <br />
              <small>October 15 - November</small>
            </div>
          </div>
          <div className="Search_Child3">
            <img src={to} alt="retry" />
            <div>
              <span>Tour Type</span>
              <br />
              <small>2 adults - 1 Children - 1 room</small>
            </div>
          </div>
          <div className="Search_Child4">
            <button className="btn btn-dark btn-lg">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchConatiner;
