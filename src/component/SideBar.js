import React from "react";
import RangeSlider from "./RangeSlider";
import "../styles/SideBar.css";
function SideBar() {
  return (
    <div>
      <div className="Category1">
        <h6>Category Types</h6>
        <input type="checkbox" id="Tour" name="Tour" />
        <label for="Tour">Tour</label>
        <br />
        <input type="checkbox" id="Attractions" />
        <label for="Attractions">Attractions</label>
        <br />
        <input type="checkbox" id="Day Tips" />
        <label for="Day Tips">Day Tips</label>
        <br />
        <input type="checkbox" id="Outdoor Activites" />
        <label for="Outdoor Activites">Outdoor Activites</label>
        <br />
        <div className="Others">
          <h6>Others</h6>
          <input type="checkbox" id="Free Cancelations" />
          <label for="Free Cancelations">Free Cancelations</label>
          <br />
        </div>
        <div className="Price">
          <h6>Price</h6>
          <RangeSlider />
        </div>
        <div className="Duration">
          <h6>Duration</h6>
          <input type="checkbox" id="duration1" />
          <label for="duration1">Up to 1 hour</label> <br />
          <input type="checkbox" id="duration2" />
          <label for="duration2">1 to 4 hour</label>
          <br />
          <input type="checkbox" id="duration3" />
          <label for="duration3">4 hours to 1 days</label>
          <br />
        </div>
        <div className="languages">
          <h6>languages</h6>
          <input type="checkbox" id="English" />
          <label for="English">English</label>
          <br />
          <input type="checkbox" id="Spanish" />
          <label for="Spanish">Spanish</label>
          <br />
          <input type="checkbox" id="French" />
          <label for="French">French</label>
          <br />
          <input type="checkbox" id="Turkish" />
          <label for="Turkish">Turkish</label>
          <br />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
