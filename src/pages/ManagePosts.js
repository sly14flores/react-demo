import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'

import ButtonPrimary from '../components/ButtonPrimary'
import ButtonSecondary from '../components/ButtonSecondary'

import AllPosts from './AllPosts'
import NewPost from './NewPost'

const ManagePosts = () => {

  const { path, url } = useRouteMatch();

  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="col-span-1">
          <div className="w-3/4 mt-4 ml-4 bg-white shadow-md rounded-lg overflow-hidden">
              <div className="flex flex-col">
                  <Link to="/" className="px-4 py-2 hover:bg-gray-200">Home</Link>
                  <Link to="/posts" className="px-4 py-2 bg-gray-200 hover:bg-gray-200">Manage Posts</Link>
              </div>
          </div>
      </div>
      <div className="col-span-2">
          <div className="mt-4">
            <Link to={url}>
              <ButtonPrimary
                  className="mr-4"
                  type="button"

                >
                All Posts
              </ButtonPrimary>
            </Link>
            <Link to={`${url}/new`}>
              <ButtonSecondary
                className=""
                type="button"

              >
                New Post
              </ButtonSecondary>
            </Link>
          </div>
          <div className="w-3/4 mt-4 p-4 bg-white shadow-md rounded-lg overflow-hidden">
            <Switch>
              <Route exact path={path}>
                <AllPosts />
              </Route>
              <Route path={`${path}/new`}>
                <NewPost />
              </Route>
            </Switch>
          </div>
      </div>      
    </div>
  )
}

export default ManagePosts