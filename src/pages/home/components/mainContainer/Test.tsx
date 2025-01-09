import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
    return `${value}°C`;
  }
  
  export default function ColorSlider() {
    return (
      <Box sx={{ width: 80}}>
        <Slider
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={valuetext}
          sx={{
            color: '#373737', // Color personalizado
          }}
        />
      </Box>
    );
  }