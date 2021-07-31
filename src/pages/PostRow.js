import { Link, useRouteMatch } from 'react-router-dom'
import usePost from '../hooks/usePost'
import ConfirmDialog from '../components/ConfirmDialog';
import { useState } from 'react';

const PostRow = ({post, setPage, perPage}) => {

  const [isOpen, setIsOpen] = useState(false)

  const { path } = useRouteMatch();
  const postHook = usePost()

  const { id, category, title, content } = post

  const removePost = (e) => {
    setIsOpen(true)
    e.preventDefault()
  }

  const onOk = () => {
    const totalPosts = postHook.remove(id)
    console.log(totalPosts)
    if (totalPosts <= perPage) setPage(0)
  }

  return (
    <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
      <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
          {category}
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
          {title}
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
          {content}
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
          <Link to={`${path}/${id}`} className="text-blue-400 hover:text-blue-600 underline">Edit</Link>
          <a href="#!" onClick={removePost} className="text-blue-400 hover:text-blue-600 underline pl-6">Remove</a>
          <ConfirmDialog
            title="Confirmation"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onOk={onOk}
          >
            Are you sure you want to delete this post?
          </ConfirmDialog>
      </td>
    </tr>
  )
}

export default PostRow