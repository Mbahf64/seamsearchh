import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

// Wrap the component in forwardRef
const PriceRange = React.forwardRef((props, ref) => {
  const [value, setValue] = React.useState([60, 100]);

  // Use useImperativeHandle to expose the clear method
  React.useImperativeHandle(ref, () => ({
    clear() {
      setValue([5, 20]); // Reset to the initial default value or any value you prefer
    }
  }));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const CustomSliderStyles = {
    "& .MuiSlider-thumb": {
      color: "#fff",
      border: "1px solid #7E8492",
      width: 16,
      height: 16,
      marginTop: 0, // Adjust the position of the thumb
    },
   
    "& .MuiSlider-track": {
      color: "#7E8492",
      height: 2, // Adjust the height of the track
    },
    "& .MuiSlider-rail": {
      color: "#DADDE1",
      height: 4, // Adjust the height of the rail
    },
    "& .MuiSlider-valueLabel": {
      color: "#fff", // Adjust the color of the value label
    },
  };


  return (
    <Box className="w-full mt-2">
      <Typography
        className="font-['Inter'] font-[500] text-[14px] pt-1.5"
        variant="body1"
        gutterBottom
      >
        Price Range
      </Typography>
      <Slider
        size="medium"
        sx={CustomSliderStyles}
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={(value) => `${value}°C`}
      />
    </Box>
  );
});

export default PriceRange;
