import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom"

export default function Post({item}) {
  return (
    <div>
        id: {item.id}
        {item.title}
        <Link to={'/posts/' + item.id}>post details</Link>

    </div>
  );
}