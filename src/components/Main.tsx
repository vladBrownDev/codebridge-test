import React from 'react';
import './main.scss';
import Post from './Post';
import { DataResponse } from '../App';
import { Box } from '@mui/material';

interface Props {
  posts: DataResponse[]
}


function Main(props: Props) {
  const {posts} = props
  return (
    <section id="main">
      <Box id="main__head">
        Results: {posts.length}
      </Box>
      <Box id="main__underline"></Box>
      <Box id="main__postsWrapper">
        {posts.map((el: DataResponse, ind: number) => {
          return <Post
            imageUrl={el.imageUrl}
            publishedAt={el.publishedAt}
            title={el.title}
            summary={el.summary}
          />
        })}
      </Box>
    </section>
  );
}

export default Main;
