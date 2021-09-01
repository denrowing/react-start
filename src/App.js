import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom"
import StaticUserDetails from "./components/users/StaticUserDetails";

import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";


export default function App() {

  return (
<Router>

    <div>
      <Link to={'/'}>default page</Link>
    <br/>
        <Link to={'/users'}>users page</Link>
      <br/>
      <Link to={'/posts'}>posts page</Link>
    </div>

  <Route path={'/users'} component={Users}/>
  <Route path={'/posts'} component={Posts}/>

</Router>


  );
}

// Є дві лінки
// /users
// /posts
//
// /users - робить все те, що було на занятті останнім способом (через кнопку та ддатковий запит на сервер)
//
// /posts
// Отримує posts з jsobplaceholder, виводить їх всі.
//     Біля кожного поста зробити лінку (не конопку) яка буде вести на детальну інформацію поста. Детальну інформацію отримувати через history.state