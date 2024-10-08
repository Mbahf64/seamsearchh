import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from "@mui/material/Typography";

// Wrap the component in forwardRef
const SliderSizes = React.forwardRef((props, ref) => {
  const [value, setValue] = React.useState(70);

  // Use useImperativeHandle to expose the clear method
  React.useImperativeHandle(ref, () => ({
    clear() {
      setValue(12); // Reset to the initial default value or any value you prefer
    }
  }));

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
    <Box className="w-full mt-4">
      <Typography
        className="font-['Inter'] font-[500] text-[14px]"
        variant="body1"
        gutterBottom
      >
        Product Per Store
      </Typography>
      <Slider
        sx={CustomSliderStyles}
        size="medium"
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    </Box>
  );
});

export default SliderSizes;
