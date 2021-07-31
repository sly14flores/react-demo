import { postsState } from '../store/atoms'
import { useSetRecoilState, useRecoilValue } from 'recoil'

import PostForm from './PostForm'
import { useState } from 'react'
import { selectLoginState } from '../store/selectors'

import useStorage from '../hooks/useStorage';

const postValues = {
  id: 0,
  category: '',
  user: '',
  title: '',
  content: ''
}

const NewPost = () => {

  const [postData, setPostData] = useState(postValues)
  const setPosts = useSetRecoilState(postsState)
  const login = useRecoilValue(selectLoginState)

  const storage = useStorage()

  const addPost = (values) => {

    setPosts((oldPosts) => {
      const merged = [
          ...oldPosts, 
          {
              ...values,
              id: oldPosts.length+1,
              user: `${login.firstname} ${login.lastname}`,
          }
      ]
      storage.update('posts',merged)
      return merged
    })

    setPostData({...postValues})

  }

  return (
    <div>
        <PostForm post={postData} addPost={addPost} updatePost={null} />
    </div>
  )
}

export default NewPost