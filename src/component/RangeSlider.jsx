import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const RangeSlider = () => {
  const [sliderValues, setSliderValues] = React.useState([0, 750]);

  const handleSliderChange = (values) => {
    setSliderValues(values);
  };

  return (
    <div>
      <h6>
        ${sliderValues[0]} - ${sliderValues[1]}
      </h6>
      <Slider
        min={0}
        max={1000}
        step={1}
        range
        value={sliderValues}
        onChange={handleSliderChange} style={{width:"80%"}}
      />
    </div>
  );
};

export default RangeSlider;
