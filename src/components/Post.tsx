import React from 'react';
import './post.scss';

import { Box } from '@mui/material';
import { DataResponse } from '../App';

function Post(props: DataResponse) {
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
          <Box className='post__date'>{ props.publishedAt }</Box>
        </Box>
        <Box className='post__headText'>
          {props.title}
        </Box>
        <Box className='post__description'>
          {props.summary}
        </Box>
        <Box className='post__readmoreWrapper'>
          <Box className='post__readmore'>Read more</Box>
          <Box className='post__arrowIcon'></Box>
        </Box>
      </Box>
      
    </Box>
  );
}

export default Post;