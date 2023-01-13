import React from 'react';
import "./openedPost.scss"

import { Box, Link, Typography  } from '@mui/material';

interface Props {
  title: string,
  summary: string,
  imageUrl: string,
  closePost: () => void
}

function OpenedPost(props: Props) {
  return (
    <>
      <Box
        component="img"
        alt="Post image"
        id='openedPost__image'
        src={props.imageUrl}
      />
      <Box id="openedPost__text">
        <Typography component="h1" id="openedPost__head">
          {props.title}
        </Typography>
        <Box id="openedPost__descripion">
          {props.summary}
        </Box>
      </Box>
      <Box id="openedPost__footer">
        <Box id="openedPost__arrow"></Box>
        <Link
          id="openedPost__homeLink"
          underline="none"
          onClick={props.closePost}
        >
          Back to homepage
        </Link>
      </Box>
    </>
  );
}

export default OpenedPost;
