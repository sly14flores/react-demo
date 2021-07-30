import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import usePost from '../hooks/usePost'

import PostForm from './PostForm'

const postValues = {
  id: 0,
  category: '',
  user: '',
  title: '',
  content: ''
}

const EditPost = () => {

  const { id } = useParams()
  const [postData, setPostData] = useState(postValues)
  const postHook = usePost()

  useEffect(() => { // eslint-disable-line
    const post = postHook.get(id)
    setPostData(post)
  })

  const updatePost = (values) => {

    postHook.update(id, values)

  }

  return (
    <div>
      <PostForm post={postData} addPost={null} updatePost={updatePost} />
    </div>
  )

}

export default EditPost