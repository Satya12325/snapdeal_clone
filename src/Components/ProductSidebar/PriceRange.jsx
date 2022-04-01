import { Box, Slider } from '@mui/material';
import React from 'react'
function valuetext(value) {
    return `${value}°C`;
  }
export const PriceRange = () => {
    const [value, setValue] = React.useState([299, 2099]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: 250 }}>
    <Slider
      getAriaLabel={() => 'Temperature range'}
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      getAriaValueText={valuetext}
    />
  </Box>
  )
}
