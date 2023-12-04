import React from "react";
import RangeSlider from "./RangeSlider";
import "../styles/SideBar.css";
function SideBar(props) {
  console.log(props)
  return (
    <div>
      <div className="Category1">
        <h6>Category Types</h6>
        <input type="checkbox" id="Tour" name="Tour" value="Tours" onChange={props.handleCheck} />
        <label for="Tour">Tour</label>
        <br />
        <input type="checkbox" id="attraction" name="attraction" value="attraction"  onChange={props.handleCheck} />
        <label for="attraction">Attractions</label>
        <br />
        <input type="checkbox" id="Daytrips" name="Daytrips" value="Daytrips"  onChange={props.handleCheck} />
        <label for="Daytrips">Day Tips</label>
        <br />
        <input type="checkbox" id="outdoor" name="outdoor" value="outdoor"  onChange={props.handleCheck} />
        <label for="outdoor">Outdoor Activites</label>
        <br />
        <input type="checkbox" id="consershow"  name="consershow" value="consershow"  onChange={props.handleCheck}/>
        <label for="consershow">Concert & Shows</label>
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
