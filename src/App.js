import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom"
import Users from "./components/Users";
import StaticUserDetails from "./components/StaticUserDetails";


export default function App() {
  return (
      <Router>
          <div>
             <Link to={'/users'}>users Page</Link>

          </div>
          <Route path={'/users'} component={Users}/>

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