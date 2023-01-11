import React from "react";
import "./header.scss"
import SearchIcon from "../media/search-icon.png"

import { Box } from "@mui/system";
import { OutlinedInput } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

export default function Header() {
  return (
    <header>
      <Box id="header__text">Filter by keywords</Box>
      <FormControl id="header__search" variant="standard">
        <OutlinedInput
          startAdornment={
            <InputAdornment position="start">
              <img alt="searchIcon" src={SearchIcon}></img>
            </InputAdornment>
          }
        />
      </FormControl>
    </header>
  )
}