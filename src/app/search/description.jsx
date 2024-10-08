import React, { useState } from "react";
import Link from "next/link";
import Box from '@mui/joy/Box';
// import TextField from "@mui/material/TextField";
// import Typography from "@mui/material/Typography";
// import Button from '@mui/joy/Button';

import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Textarea from '@mui/joy/Textarea';

export default function FormPropsTextFields() {
  const [buttonText, setButtonText] = useState("Search for Item");
  const [buttonWidth, setButtonWidth] = useState(195);

  const handleClick = () => {
    if (buttonText === "Search for Item") {
      setButtonText("Search for Item");
      setButtonWidth(195);
    } else {
      setButtonText("Search for Item");
      setButtonWidth(195);
    }
  };

  return (

    <Box >
      <FormControl>
                  <FormLabel  className="font-['Inter'] font-[500] text-[14px] pt-3 pb-[1px]">Description</FormLabel>
                  <FormHelperText   className="font-['Inter'] font-[300] text-[12px] color-[#84818A] pb-[10px]">This is a support text to help get more narrow the search</FormHelperText>
                  <Textarea  className="w-full lg:w-[480px]" placeholder="" minRows={2} />
                  <FormHelperText className="font-['Inter'] font-[300] text-[12px] color-[#84818A] pt-[1px] italic sm:mb-4">Optional</FormHelperText>
                </FormControl>

    
        <button
          className="capitalize font-[500] text-[16px] text-[#ffff] w-full lg:w-[195px] h-[64px] mt-4 lg:mt-[5px] shadow-none bg-[#563FEB] hover:bg-[#5c45ee] rounded-lg cursor-pointer"
          variant="contained"
          size="large"
          onClick={handleClick}
        >
          <Link href='/store' className="no-underline text-[#ffff]">
          {buttonText}
          </Link>
        </button>
      </Box>



    
  );
}


