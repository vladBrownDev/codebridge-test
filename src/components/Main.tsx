import React from 'react';
import './main.scss';
import Post from './Post';
import { DataResponse } from '../App';
import { Box } from '@mui/material';

interface Props {
  posts: DataResponse[],
  openPost: (title: string, summary: string, imageUrl: string) => void
}


function Main(props: Props) {
  const { posts } = props
  const { openPost } = props
  return (
    <section id="main">
      <Box id="main__head">
        Results: {posts.length === 0 ? " no posts yet" : posts.length}
      </Box>
      <Box id="main__underline"></Box>
      <Box id="main__postsWrapper">
        {posts.map((el: DataResponse, ind: number) => {
          return <Post
            imageUrl={el.imageUrl}
            publishedAt={el.publishedAt}
            title={el.title}
            summary={el.summary}
            openPost={() => { openPost(el.title, el.summary,el.imageUrl) }}
            key={`post${ind}`}
            request={el.request}
          />
        })}
      </Box>
    </section>
  );
}

export default Main;
