import TopNav from './components/TopNav'
import Posts from './components/Posts'

import ManagePosts from './ManagePosts';

import {
    Switch,
    Route,
} from "react-router-dom";

const Home = () => {

    return (
        <div>
            <TopNav />
            <Switch>
                <Route exact path="/" key={1}>
                    <Posts />
                </Route>
                <Route path="/posts" key={2}>
                    <ManagePosts />
                </Route>
                <Route path="/posts/new" key={3}>
                    <ManagePosts />
                </Route>                
            </Switch>
        </div>
    )

}

export default Home