import React from 'react';
import './main.scss';

import { Box } from '@mui/material';

function Main() {
  return (
    <section id="main">
      <Box id="main__head">
        Results: 6
      </Box>
      <Box id="main__underline"></Box>
      <Box id="main__postsWrapper">
      </Box>
    </section>
  );
}

export default Main;
