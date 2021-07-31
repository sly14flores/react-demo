import { postsState } from "../store/atoms"
import { selectPostsState } from "../store/selectors"
import { useRecoilValue, useSetRecoilState } from "recoil"
import useStorage from './useStorage'

const usePost = () => {

  const posts = useRecoilValue(selectPostsState)
  const setPosts = useSetRecoilState(postsState)
  const postsLocal = useStorage('posts')  

  const get = (id) => {

    const index = posts.findIndex(post => post.id === parseInt(id))

    const post = posts[index]

    return post

  }

  const update = (id,post) => {

    const index = posts.findIndex(post => post.id === parseInt(id))

    setPosts((oldPosts) => {
      const postsCopy = [...oldPosts]
      postsCopy[index] = {...post}
      postsLocal.update(postsCopy)
      return postsCopy
    })

  }

  const remove = (id) => {

    const index = posts.findIndex(post => post.id === parseInt(id))

    setPosts((oldPosts) => {
      const postsCopy = [...oldPosts]
      postsCopy.splice(index,1)
      postsLocal.update('posts',postsCopy)
      return postsCopy
    })

    return posts.length - 1

  }

  return {
    get,
    update,
    remove,
  }

}

export default usePost