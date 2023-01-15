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
  url?: string,
  request: string
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
    setPosts([])
    
    let requestArr = request.split(" ")
    //including combinations of words in request

    let wordsCombination:string[] = []
    requestArr.forEach((el, ind) => {
      wordsCombination.length === 0 ?
        wordsCombination.push(el) :
        wordsCombination.push(wordsCombination[ind - 1] + "%20" + el)
    })
    requestArr = [...wordsCombination,...requestArr,]
    // including single words in request

    const titleRequest = requestArr.map((el, ind) => {
      return ind === 0 ? `title_contains=${el}` : `&title_contains=${el}`
    })
    const summaryRequest = requestArr.map((el, ind) => {
      return ind === 0 ? `summary_contains=${el}` : `&summary_contains=${el}`
    })

    const titleUrl = `https://api.spaceflightnewsapi.net/v3/articles?${titleRequest.join("")}`
    const summaryUrl = `https://api.spaceflightnewsapi.net/v3/articles?${summaryRequest.join("")}}`

    try {
      const titleData = await axios.get<DataResponse[]>(titleUrl);
      const summaryData = await axios.get<DataResponse[]>(summaryUrl);

      let allPosts = [...titleData.data, ...summaryData.data].map((el) => {
        let newElement = el
        newElement.request = request
        return newElement
      })

      allPosts = allPosts.filter((el, ind, self) =>
        ind === self.findIndex((t) => (
          t.title === el.title
        ))
      )
      setPosts(allPosts)
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.message);
      } else {
        alert(error);
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
