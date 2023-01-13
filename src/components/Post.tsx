import React from 'react';
import './post.scss';

import { Box, Link } from '@mui/material';
import { DataResponse } from '../App';

interface Props extends DataResponse {
  openPost: () => void
}

function Post(props: Props) {
  const postTime = props.publishedAt.split("T")[0]
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
          <Box className='post__date'>{ postTime }</Box>
        </Box>
        <Box className='post__headText'>
          {props.title}
        </Box>
        <Box className='post__description'>
          {props.summary}
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