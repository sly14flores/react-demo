import {
    Route,
    Redirect,
} from "react-router-dom";

import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"

import useAuth from './hooks/useAuth'
import ManagePosts from "./pages/ManagePosts";
const authRoute = "/login"

const routes = [
    {
        key: 1,
        path: '/',
        exact: true,
        private: true,
        component: () => <Home />
    },
    {
        key: 2,
        path: '/login',
        component: () => <Login />
    },
    {
        key: 3,
        path: '/register',
        component: () => <SignUp />
    },
    {
        key: 3,
        path: '/posts',
        private: true,
        component: () => <ManagePosts />
    },
]

const PrivateRoute = ({ children, ...rest }) => {

    const auth = useAuth();

    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.isLogin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: authRoute,
                state: { from: location }
              }}
            />
          )
        }
      />
    );    

}

export {
    routes,
    PrivateRoute
}