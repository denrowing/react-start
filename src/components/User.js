import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom"
import UserDetails from "./UserDetails";

export default function User({item}) {

  return (
    <div>
        {/*{item.name} - <Link to={{pathname: '/users/' + item.id, state: item}}>user static details</Link>*/}
      {item.name} - <Link to={{pathname: '/users/' + item.id}}>user static details</Link>
{/*<Route path={'/users/' + item.id} component={UserDetails}/>*/}
    </div>
  );
}