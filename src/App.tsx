import React, { useState } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Main from './components/Main';
import OpenedPost from './components/OpenedPost';

export interface DataResponse {
  events?: string[],
  featured?: boolean,
  id?: number,
  imageUrl: string,
  launches?: { id: string, provider: string }[],
  newsSite?: string,
  publishedAt: string,
  summary: string,
  title: string,
  updatedAt?: string,
  url?: string
}

interface ChosenPost  {
  summary: string,
  title: string,
  imageUrl: string
}

function App() {
  const [posts, setPosts] = useState<DataResponse[]>([])
  const [chosenPost, setChosenPost] = useState<ChosenPost>()

  function openPost(title: string, summary: string,imageUrl:string):void {
    setChosenPost({
      title: title,
      summary: summary,
      imageUrl: imageUrl
    })
  }

  function closePost() {
    setChosenPost(undefined)
  }

  async function getPosts(request: string) {
    const url = `https://api.spaceflightnewsapi.net/v3/articles?title_contains=${request}`
    try {
      const { data } = await axios.get<DataResponse[]>(url,{
        headers: {
          Accept: 'application/json',
        },
      },);
      setPosts(data)
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
      } else {
        console.log('unexpected error: ', error);
      }
    }
  }
  function MainPageComponent() {
    return (
      <>
        <Header searchFunc={(param:string) => getPosts(param)} />
        <main>
          <Main
            posts={posts}
            openPost={(title: string, summary: string, imageUrl:string) => openPost(title, summary,imageUrl)}
          />
        </main> 
      </>
    )
  }
  return (
    chosenPost !== undefined ?
      <OpenedPost
        imageUrl={chosenPost.imageUrl}
        title={chosenPost.title}
        summary={chosenPost.summary}
        closePost={closePost}
      /> : MainPageComponent()
  );
}

export default App;
