import { selectPostsState } from "../store/selectors"
import { useRecoilValue } from "recoil"
import { useState } from "react"

import PostRow from "./PostRow"

const AllPosts = () => {

  const posts = useRecoilValue(selectPostsState)
  const [filter, setFilter] = useState('')

  const postsDisplay = posts.filter(post =>
    filter === ""
    ?
    true
    :
    post.content.toLowerCase().includes(filter.toLowerCase())
  )
  .map(post => <PostRow post={post} key={post.id} />)

  return (
    <div>
      <div className="mt-4 mb-4 bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
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
      <table className="border-collapse w-full">
          <thead>
              <tr>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Category</th>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Title</th>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Content</th>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
              </tr>
          </thead>
          <tbody>
            {postsDisplay}
          </tbody>
      </table>
    </div>
  )
}

export default AllPosts