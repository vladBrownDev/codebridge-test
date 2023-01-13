import React,{useState} from "react";
import "./header.scss"
import SearchIcon from "../media/search-icon.png"

import { Box } from "@mui/system";
import { OutlinedInput } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

type Props = {
  searchFunc: (param: string) => Promise<void>
}

export default function Header(props: Props) {
  const [inputValue, setinputValue] = useState("")

  return (
    <header>
      <Box id="header__text">Filter by keywords</Box>
      <FormControl id="header__search" variant="standard">
        <OutlinedInput
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => { setinputValue(e.target.value) }}
          value={inputValue}
          onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            if (e.key === "Enter") props.searchFunc(inputValue)
          }}
          startAdornment={
            <InputAdornment
              sx={{ "cursor": "pointer" }}
              position="start"
              onClick={() => {props.searchFunc(inputValue)}}
            >
              <img alt="searchIcon" src={SearchIcon}></img>
            </InputAdornment>
          }
        />
      </FormControl>
    </header>
  )
}