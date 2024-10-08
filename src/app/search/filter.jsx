"use client";

import React, { useState, useRef } from "react";
import Select from "../search/select";
import Description from "../search/description";
import PriceRange from "../search/priceRange";
import ProductPerStore from "../search/productPerStore";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MyAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const selectRef = useRef(null);
  const priceRangeRef = useRef(null);
  const productPerStoreRef = useRef(null);

  const handleChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const handleClearFilters = (event) => {
    event.stopPropagation(); // Prevent the event from propagating to the Accordion
    if (selectRef.current) selectRef.current.clear();
    if (priceRangeRef.current) priceRangeRef.current.clear();
    if (productPerStoreRef.current) productPerStoreRef.current.clear();
  };

  return (
    <div>
      <Box className="w-full lg:w-[480px] rounded-[16px] overflow-hidden mb-3">
        <Accordion
          expanded={expanded}
          onChange={handleChange}
          sx={{
            backgroundColor: "#F2F4F8",
            color: "#1E1E1E",
            boxShadow: "none",
            borderRadius: "16px",
            overflow: "hidden",
            padding: "15px 10px",
            "&:before": {
              display: "none",
            },
          }}
          disableGutters
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                style={{
                  transform: expanded ? "rotate(180deg)" : "rotate(270deg)",
                }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              backgroundColor: "#F2F4F8",
              borderRadius: expanded ? "16px 16px 0 0" : "16px",
              margin: 0,
            }}
          >
            <Typography className="font-semibold">Filters</Typography>
            {expanded && (
      
                <Typography
                 aria-label="clear-filters"
                 size="small"
                 onClick={handleClearFilters}
                 sx={{
                   marginLeft: "auto",
                   textDecoration: "underline",
                   "&:hover": { backgroundColor: "transparent !important" },
                   "&:active": {  backgroundColor: "transparent !important" },
                 }}
                className="font-[550px] text-[14px] text-[#7E8492] pr-4" variant="body2">
                  Clear filters
                </Typography>
      
            )}
          </AccordionSummary>
          <AccordionDetails>
            <Select ref={selectRef} />
            <PriceRange ref={priceRangeRef} />
            <ProductPerStore ref={productPerStoreRef} />
          </AccordionDetails>
        </Accordion>
      </Box>
            <Description
          sx={{
            padding: 22,
          }}
  
        />
    </div>
  );
};

export default MyAccordion;




