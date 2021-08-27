import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Users from "./components/Users/Users";
import './App.css'
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

export default function App() {
  return (
      <Router>
          <div>
              <div className={'wrap'}>
                  <Link to={'/'}>to Home Page</Link>
                  <Link to={'/users-page'}>to users Page</Link>
                  <Link to={'/posts-page'}>to posts Page</Link>
                  <Link to={'/comments-page'}>to comments Page</Link>
              </div>

            <Route path={'/users-page'} component={Users}/>
            <Route path={'/posts-page'} component={Posts}/>
            <Route path={'/comments-page'} component={Comments}/>

          </div>
      </Router>
  );
}

// Є три лінки
// /users-page
// /posts-page
// /comments-page
// При кліку на відповідну лінку відбувається перехід на відповідний компонент,
//     який дістає з jsonplaceholder інформацію про відповідні стуності, та виводить їх повний список