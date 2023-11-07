import { useState } from 'react'
import './App.css'
import { Post } from './components/Post'
import { Posts } from './components/Posts'

function App() {

  const [postId, setPostId] = useState(-1)
  
  const handlePostId = (id) => {
    setPostId(id)
  }

  return (
    <main>
      {
        postId === -1 ? <Posts handlePostId={handlePostId} /> : (
          <>
            <button onClick={() => setPostId(-1)}>Back</button>
            <Post id={postId} />
          </>
          ) 
      }
    </main>
  )
}

export default App
