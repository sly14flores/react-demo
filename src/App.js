import './index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import {
  RecoilRoot,
} from 'recoil';

import {
  routes,
  PrivateRoute,
} from './routes'

function App() {

  return (
    <RecoilRoot>    
      <Router>
        <Switch>
          {
            routes.map(route =>
              route.private
              ?
              <PrivateRoute path={route.path} exact={route.exact} children={<route.component />} key={route.key} />
              :
              <Route path={route.path} exact={route.exact} children={<route.component />} key={route.key} />
              )
            }
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;
