import React from 'react';
import './post.scss';

import { Box } from '@mui/material';

function Post() {
  return (
    <Box className='main__post'>
      <Box
        component="img"
        alt="Post image"
        className='post__image'
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
      <Box className='post__text'>
        <Box sx={{"display": "flex"}}>
          <Box className='post__calendarIcon'></Box>
          <Box className='post__date'>June 29th, 2021</Box>
        </Box>
        <Box className='post__headText'>
          The 2020 World's Most Valuable Brands
        </Box>
        <Box className='post__description'>
          Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...
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