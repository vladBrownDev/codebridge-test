import React from 'react';
import './post.scss';
import Highlighter from "react-highlight-words";

import { Box, Link } from '@mui/material';
import { DataResponse } from '../App';


interface Props extends DataResponse {
  openPost: () => void
}

function Post(props: Props) {

  function transformDate(date: string) {
    let result = ""
    const [yearNumber, monthNumber, dayNumber] = date.split("T")[0].split("-")
    
    //getting month
    const d = new Date()
    d.setMonth(Number(monthNumber) - 1);
    const month = d.toLocaleString('en-US', { month: 'long' })
    result += month
    
    //getting day
    let day
    switch (Number(dayNumber)) {
      case 1:
        day = ` 1st`
        break
      case 2:
        day = ` 2nd`
        break
      case 3:
        day = ` 3rd`
        break
      default:
        day = ` ${dayNumber}th`
    }
    result += day
    result += `, ${yearNumber}`
    return result
  }
  
  return (
    <Box className='main__post'>
      <Box
        component="img"
        alt="Post image"
        className='post__image'
        src={props.imageUrl}
      />
      <Box className='post__text'>
        <Box sx={{"display": "flex"}}>
          <Box className='post__calendarIcon'></Box>
          <Box className='post__date'>{ transformDate(props.publishedAt) }</Box>
        </Box>
        <Box className='post__headText'>
          <Highlighter
            searchWords={props.request.split(" ")}
            autoEscape={true}
            textToHighlight={props.title}
          />
        </Box>
        <Box className='post__description'>
          <Highlighter
            searchWords={props.request.split(" ")}
            autoEscape={true}
            textToHighlight={props.summary}
          />
        </Box>
        <Link
          underline='none'
          className='post__readmoreWrapper'
          onClick={props.openPost}>
          <Box className='post__readmore'>Read more</Box>
          <Box className='post__arrowIcon'></Box>
        </Link>
      </Box>
      
    </Box>
  );
}

export default Post;