import { useEffect, useState } from 'react'

import Post from './HomePost'
import Categories from './components/Categories'
import { Link } from 'react-router-dom'

import { selectPostsState } from "../store/selectors"
import { useRecoilValue } from "recoil"

const HomePosts = () => {

  const posts = useRecoilValue(selectPostsState)
  const [filter, setFilter] = useState('')
  const [category, setCategory] = useState('All')

  useEffect(() => {
    console.log(posts)
  },[posts])

  const displayPosts = posts.filter(post => 
    post.content===""
    ?
    true
    :
    post.content.toLowerCase().includes(filter.toLowerCase())
  )
  .filter(post => 
    category==="All"
    ?
    true
    :
    post.category === category
  )
  .map(post => 
      <Post post={post} key={post.id} />
  )

  return (
    <div className="grid grid-cols-3 gap-2">
      <div>
          <div className="w-3/4 mt-4 ml-4 bg-white shadow-md rounded-lg overflow-hidden">
              <div className="flex flex-col">
                  <Link to="/" className="px-4 py-2 bg-gray-200 hover:bg-gray-200">Home</Link>
                  <Link to="/posts" className="px-4 py-2 hover:bg-gray-200">Manage Posts</Link>
              </div>
          </div>
      </div>     
      <div>
        <div className="mt-4 bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
            <button className="mr-2 outline-none focus:outline-none">
              <svg className="w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search content"
              className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
        </div>
        {
          displayPosts.length > 0
          ?
          displayPosts
          :
          <p className="mt-6 text-2xl text-center text-gray-400">No posts yet</p>}
      </div>
      <div>
        <Categories category={category} setCategory={setCategory} />                           
      </div>      
    </div>
  )
}

export default HomePosts