import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Users from "./components/Users";
import './App.css'

export default function App() {
  return (
      <Router>
          <div>
              <div className={'wrap'}>
                  <Link to={'/'}>to Home Page</Link>
                  <Link to={'/users-page'}>to users Page</Link>
              </div>

            <Route path={'/users-page'} component={Users}/>

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