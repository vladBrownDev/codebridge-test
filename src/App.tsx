import React, { useState } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Main from './components/Main';

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


function App() {
  const [posts, setPosts] = useState<DataResponse[]>([])

  async function getPosts(request: string) {
    const url = `https://api.spaceflightnewsapi.net/v3/articles?title_contains=${request}`
    try {
      const { data } = await axios.get<DataResponse[]>(url,{
        headers: {
          Accept: 'application/json',
        },
      },);
      console.log(data);
      const dataCopy = data;
      setPosts(dataCopy)
      console.log(posts)
      return dataCopy.length
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
      } else {
        console.log('unexpected error: ', error);
      }
      return 0
    }
}

  return (
    <>
      <Header searchFunc={(param:string) => getPosts(param)} />
      <main>
        <Main posts={posts} />
      </main>
    </>
  );
}

export default App;
