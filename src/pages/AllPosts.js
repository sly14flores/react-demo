import { selectPostsState } from "../store/selectors"
import { useRecoilValue } from "recoil"
import { useState } from "react"
import ButtonSecondary from '../components/ButtonSecondary'

import PostRow from "./PostRow"
import PaginateList from '../components/PaginateList'
const perPage = 5

const AllPosts = () => {

  const posts = useRecoilValue(selectPostsState)
  const [filter, setFilter] = useState('')
  const [category, setCategory] = useState('All')
  const [page, setPage] = useState(0)

  const postsDisplay = posts.filter(post =>
    filter === ""
    ?
    true
    :
    post.content.toLowerCase().includes(filter.toLowerCase())
  )
  .filter(post =>
    category === "All"
    ?
    true:
    post.category === category
  )
  .map(post => <PostRow post={post} key={post.id} setPage={setPage} perPage={perPage} />)

  return (
    <div>
      <div className="mt-4 mb-4 bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
          <ButtonSecondary
            className="mr-2"
            type="button"
            onClick={() => setCategory('All')}
          >
            All
          </ButtonSecondary>
          <ButtonSecondary
            className="mr-2"
            type="button"
            onClick={() => setCategory('UX')}
          >
            UX
          </ButtonSecondary>
          <ButtonSecondary
            className="mr-2"
            type="button"
            onClick={() => setCategory('FE')}
          >
            FE
          </ButtonSecondary>
          <ButtonSecondary
            className="mr-4"
            type="button"
            onClick={() => setCategory('BE')}
          >
            BE
          </ButtonSecondary>                    
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
          <PaginateList page={page} setPage={setPage} perPage={perPage} data={postsDisplay} />
      </table>
    </div>
  )
}

export default AllPosts